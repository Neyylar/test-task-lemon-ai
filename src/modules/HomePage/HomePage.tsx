'use client';

import { Flex } from '@chakra-ui/react';

import SignInForm from '~/components/signInForm/SignInForm';

const HomePage = () => {
  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      w="full"
    >
      <SignInForm />
    </Flex>
  );
};

export default HomePage;
