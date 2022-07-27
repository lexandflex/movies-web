import React, { ReactElement } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { AppInput } from '@components/AppInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppButton } from '@components/AppButton';
import { useDispatch } from 'react-redux';
import { Navigator } from '@services/navigatorService';
import { RouteNames } from '@router/routeNames';
import { registerAction } from '@store/actions/auth';
import { registerSchema } from './yupSchema';
import { AppForm } from '../../components/AppForm';
import { FormFields } from './types';

export const Register = (): ReactElement => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema), mode: 'onChange' });

  console.log({ errors });
  const onSubmit = (data: any) => {
    console.log({ data });
    dispatch(registerAction.request({ email: data.email, password: data.password }));
  };

  return (
    <>
      <AppForm
        title="Register"
        onSubmit={handleSubmit(onSubmit)}
        link={{ link: '/login', title: 'Login', text: 'Already have an account?' }}
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
        <AppInput
          error={errors?.confirmPassword?.message as any as string}
          placeholder="Confirm password"
          type="password"
          {...register('confirmPassword')}
        />
        <AppButton type="submit" title="Confirm" />
      </AppForm>
      <AppButton
        title="test"
        onClick={() => {
          Navigator.push(RouteNames.MOVIES);
        }}
      />
    </>
  );
};
