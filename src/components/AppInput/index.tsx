import React, { FC, forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import * as Styled from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  error?: string;
  style?: Record<string, any>;
}

export const AppInput = forwardRef<HTMLInputElement, InputProps>(
  ({ leftIcon, style, error, ...props }, ref) => {
    console.log({ ref });
    console.log({ props, style });
    return (
      <Styled.InputContainer>
        {leftIcon || null}
        <Styled.Input style={style} {...props} ref={ref} />
        {error && <Styled.ErrorContainer>{error}</Styled.ErrorContainer>}
      </Styled.InputContainer>
    );
  },
);
