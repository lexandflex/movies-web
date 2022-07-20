import React, { ReactElement, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AppInput } from '@components/AppInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppButton } from '@components/AppButton';
import { AppSwitch } from '@components/AppSwitch';
import * as Styled from './styles';
import { registerSchema } from './yupSchema';

export const Register = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema), mode: 'onChange' });

  const [isRegister, setIsRegister] = useState(false);

  console.log({ errors });
  const onSubmit = (data: any) => {
    console.log({ data });
  };

  const handleFormSwitchToggle = useCallback((isChecked: boolean) => {
    console.log({ isChecked });
    setIsRegister(isChecked);
  }, []);

  console.log({ isRegister });

  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.Title>Register</Styled.Title>
        <AppSwitch handleToggle={handleFormSwitchToggle} />
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
          <AppInput
            error={errors?.confirmPassword?.message as any as string}
            placeholder="Confirm password"
            type="password"
            {...register('confirmPassword')}
          />
          <AppButton type="submit" title="Confirm" />
        </Styled.Form>
      </Styled.Content>
      <Link to="/login">Login</Link>
    </Styled.Wrapper>
  );
};
