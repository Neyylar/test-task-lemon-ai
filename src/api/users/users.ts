export const QUERY_KEYS = {
  addUser: 'addUser',
};

export const addUser = async ({ name, email, emailSubscription }) => {
  if (name !== 'forbidden') return { name, email, emailSubscription };
  throw new Error('name is forbidden');
};
