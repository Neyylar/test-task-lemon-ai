import {
  Button,
  Checkbox,
  Flex,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { object, string } from 'yup';

import { addUser } from '~/api/users/users';
import TextField from '~/components/textField/TextField';
import { PLACEHOLDER_PAGE_URL } from '~/consts/routes';

type FormValues = {
  firstName: string;
  email: string;
  emailSubscription: boolean;
};

const SignInForm = () => {
  const toast = useToast();
  const router = useRouter();
  const schema = useMemo(
    () =>
      object({
        firstName: string().required('Field is required'),
        email: string()
          .email('Wrong format of email')
          .required('Field is required'),
      }),
    []
  );

  const { mutate } = useMutation({
    mutationFn: addUser,
    onSuccess: (response) => {
      const name = response.user?.name;
      router.push({
        pathname: PLACEHOLDER_PAGE_URL,
        query: { userName: name },
      });
    },
    onError: (err) => {
      toast({ title: `Error occurred: ${err.message}` });
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    (values: FormValues) => {
      mutate({
        name: values.firstName,
        email: values.email,
        emailSubscription: values.emailSubscription ?? false,
      });
    },
    [mutate]
  );
  return (
    <>
      <Heading mb="57px" size="lg">
        Submit your details
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          control={control}
          error={errors.firstName}
          name="firstName"
          title="Name"
        />
        <TextField
          control={control}
          error={errors.email}
          name="email"
          title="Email"
        />
        <Flex direction="column" alignItems="flex-start">
          <Controller
            control={control}
            name="emailSubscription"
            render={({ field: { onChange, value } }) => (
              <Checkbox
                marginTop="45px"
                fontSize="16px"
                fontWeight={400}
                onChange={onChange}
                checked={value}
                data-testid="checkbox"
              >
                <Text>I want to receive updates via email. </Text>
              </Checkbox>
            )}
          />
          <Button
            marginTop="57px"
            width="199px"
            height="55px"
            fontSize="18px"
            fontWeight={700}
            onClick={handleSubmit(onSubmit)}
            data-testid="submitButton"
          >
            Start the Course
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default SignInForm;
