'use client';

import { Flex, Text, Input } from '@chakra-ui/react';

type TextFieldProps = {
  title: string;
};

const TextField = ({ title }: TextFieldProps) => {
  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      justifyContent="center"
      w="350px"
      marginTop="30px"
    >
      <Text fontSize="20px" fontWeight={700} marginBottom={2}>
        {title}
      </Text>
      <Input variant="something" />
    </Flex>
  );
};

export default TextField;
