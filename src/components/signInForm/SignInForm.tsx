import {
  Button,
  Checkbox,
  Flex,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bool, object, string } from 'yup';

import { addUser, QUERY_KEYS } from '~/api/users/users';
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
        emailSubscription: bool().required(),
      }),
    []
  );

  const { mutate } = useMutation([QUERY_KEYS.addUser], addUser, {
    onSuccess: (response) => {
      router.push({
        pathname: PLACEHOLDER_PAGE_URL,
        query: { userName: response.name },
      });
    },
    onError: (err) => {
      toast({ title: `Error occurred ${err}`, variant: err });
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
    (values) => {
      mutate({
        name: values.firstName,
        email: values.email,
        emailSubscription: values.emailSubscription,
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
                value={value}
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
          >
            Start the Course
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default SignInForm;
