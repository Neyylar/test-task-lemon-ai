'use client';

import { Flex, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const PlaceholderPage = () => {
  const router = useRouter();
  const { userName } = router.query;
  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      w="full"
    >
      <Heading mb="57px" size="lg">
        {userName
          ? `You successfully added user ${userName}!`
          : 'Some error occurred'}
      </Heading>
    </Flex>
  );
};

export default PlaceholderPage;
