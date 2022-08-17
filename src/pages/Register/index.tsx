import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { AppInput } from '@components/AppInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppButton } from '@components/AppButton';
import { AppForm } from '@components/AppForm';
import { registerAction } from '@store/actions/auth';
import { registerSchema } from './yupSchema';

export const Register = (): ReactElement => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema), mode: 'onChange' });

  const onSubmit = (data: any) => {
    console.log({ data });
    dispatch(registerAction.request({ email: data.email, password: data.password }));
  };

  return (
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
  );
};
