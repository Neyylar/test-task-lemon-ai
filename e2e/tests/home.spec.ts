import { test, expect } from '@playwright/test';

const LOCAL_HOST_URL = 'http://localhost:3000/';

const validNameEmail = ['name', 'email@email.email'];
const invalidNameEmail = ['forbidden', 'email'];
const firstNameFieldId = 'textField-firstName';
const emailFieldId = 'textField-email';

test('should show home page', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);

  await expect(page.locator('h2')).toContainText('Submit your details');

  const firstNameWrapper = page.getByTestId(firstNameFieldId);
  await expect(
    firstNameWrapper.locator('p', {
      hasText: 'Name',
    })
  ).toBeVisible();
  const firstNameInput = firstNameWrapper.locator('input');
  await expect(firstNameInput).toBeVisible();

  const emailWrapper = page.getByTestId(emailFieldId);
  await expect(
    emailWrapper.locator('p', {
      hasText: 'Email',
    })
  ).toBeVisible();
  const emailInput = emailWrapper.locator('input');
  await expect(emailInput).toBeVisible();

  const checkboxWrapper = page.getByTestId('checkbox');
  await expect(
    checkboxWrapper.locator('p', {
      hasText: 'I want to receive updates via email',
    })
  ).toBeVisible();
  await expect(checkboxWrapper.locator('input')).toBeVisible();

  await expect(
    page.locator('button', { hasText: 'Start the Course' })
  ).toBeVisible();
});

test('should validate data - wrong format of email', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  const firstNameWrapper = page.getByTestId(firstNameFieldId);
  const firstNameInput = firstNameWrapper.locator('input');
  const emailWrapper = page.getByTestId(emailFieldId);
  const emailInput = emailWrapper.locator('input');
  const button = page.getByTestId('submitButton');

  await firstNameInput.fill(validNameEmail[0]);
  await emailInput.fill(invalidNameEmail[1]);
  await button.click();
  await expect(
    emailWrapper.locator('p', { hasText: 'Wrong format of email' })
  ).toBeVisible();
});

test('should validate data - fields email and name are required', async ({
  page,
}) => {
  await page.goto(LOCAL_HOST_URL);
  const firstNameWrapper = page.getByTestId(firstNameFieldId);
  const emailWrapper = page.getByTestId(emailFieldId);
  const button = page.getByTestId('submitButton');

  await button.click();
  await expect(
    emailWrapper.locator('p', { hasText: 'Field is required' })
  ).toBeVisible();
  await expect(
    firstNameWrapper.locator('p', { hasText: 'Field is required' })
  ).toBeVisible();
});

test('should redirect to a placeholder page - valid name and username', async ({
  page,
}) => {
  await page.goto(LOCAL_HOST_URL);
  const firstNameWrapper = page.getByTestId(firstNameFieldId);
  const firstNameInput = firstNameWrapper.locator('input');
  const emailWrapper = page.getByTestId(emailFieldId);
  const emailInput = emailWrapper.locator('input');
  const button = page.getByTestId('submitButton');

  await firstNameInput.fill(validNameEmail[0]);
  await emailInput.fill(validNameEmail[1]);
  await button.click();
  await expect(page).toHaveURL(
    `${LOCAL_HOST_URL}placeholder?userName=${validNameEmail[0]}`
  );
  await expect(page.locator('h2')).toContainText(
    `You successfully added user ${validNameEmail[0]}`
  );
});

test('should give an error - invalid value of name', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  const firstNameWrapper = page.getByTestId(firstNameFieldId);
  const firstNameInput = firstNameWrapper.locator('input');
  const emailWrapper = page.getByTestId(emailFieldId);
  const emailInput = emailWrapper.locator('input');
  const button = page.getByTestId('submitButton');

  await firstNameInput.fill(invalidNameEmail[0]);
  await emailInput.fill(validNameEmail[1]);
  await button.click();
  setTimeout(
    () =>
      expect(page.locator('div', { hasText: 'Error occurred' })).toBeVisible(),
    1000
  );
});
