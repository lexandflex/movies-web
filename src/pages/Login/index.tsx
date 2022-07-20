import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AppInput } from '@components/AppInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppButton } from '@components/AppButton';
import * as Styled from './styles';
import { loginSchema } from './yupSchema';

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
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
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
      </Styled.Form>
      <Link to="/register">Register</Link>
    </Styled.Wrapper>
  );
};
