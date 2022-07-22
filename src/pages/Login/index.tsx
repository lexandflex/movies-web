import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { AppInput } from '@components/AppInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppButton } from '@components/AppButton';
import { loginSchema } from './yupSchema';
import { AppForm } from '../../components/AppForm';

export const Login = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema), mode: 'onChange' });

  console.log({ errors });
  const onSubmit = (data: any) => {
    console.log({ data });
  };

  return (
    <AppForm
      title="Login"
      onSubmit={handleSubmit(onSubmit)}
      link={{ link: '/register', title: 'Register', text: 'Do you want to create a new account?' }}
    >
      <AppInput
        error={errors?.email?.message as any as string}
        placeholder="Email"
        type="text"
        {...register('email')}
      />
      <AppInput
        error={errors?.password?.message as any as string}
        placeholder="Password"
        type="password"
        {...register('password')}
      />
      <AppButton type="submit" title="Confirm" />
    </AppForm>
  );
};