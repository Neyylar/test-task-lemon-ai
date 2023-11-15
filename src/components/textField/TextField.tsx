'use client';

import { Flex, Text, Input } from '@chakra-ui/react';
import type { Control, FieldError, FieldPath } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { colors } from '~/styles/theme/colors';

type TextFieldProps<T extends Record<string, unknown>> = {
  name: FieldPath<T>;
  control: Control<T>;
  error: FieldError | undefined;
  title: string;
};

const TextField = <T extends Record<string, unknown>>({
  name,
  control,
  title,
  error,
}: TextFieldProps<T>) => {
  return (
    <Flex
      position="relative"
      direction="column"
      alignItems="flex-start"
      justifyContent="center"
      w="350px"
      pb="30px"
    >
      <Text fontSize="20px" fontWeight={700} marginBottom={2}>
        {title}
      </Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            isInvalid={!!error}
            variant="something"
          />
        )}
      />
      {!!error && (
        <Text
          fontSize="15px"
          fontWeight={400}
          position="absolute"
          bottom={0}
          pt={4}
          textColor={colors.brand?.[600] || colors.red}
        >
          {error.message}
        </Text>
      )}
    </Flex>
  );
};

export default TextField;
