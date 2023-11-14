'use client';

import { Button, Checkbox, Flex, Heading } from '@chakra-ui/react';
import { useForm, FormProvider } from 'react-hook-form';

import TextField from '~/components/textField/TextField';

const HomePage = () => {
  const methods = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      w="full"
    >
      <Heading mb="27px" size="lg">
        Submit your details
      </Heading>
      <FormProvider {...methods}>
        <form
          onSubmit={() => {
            methods.handleSubmit(onSubmit);
          }}
        >
          <TextField context={...methods.register('firstName')} title="Name" />
          <TextField title="Email" />
          <Flex direction="column" alignItems="flex-start">
            <Checkbox marginTop="75px" fontSize="16px" fontWeight={400}>
              I want to receive updates via email.{' '}
            </Checkbox>
            <Button
              type="submit"
              marginTop="57px"
              width="199px"
              height="55px"
              fontSize="18px"
              fontWeight={700}
            >
              Start the Course
            </Button>
          </Flex>
        </form>
      </FormProvider>
    </Flex>
  );
};

export default HomePage;
