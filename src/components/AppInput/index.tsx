import React, { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { TEXT_SIZES } from '@constants/textSizes';
import { Size } from '@models/common';
import * as Styled from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  error?: string;
  style?: Record<string, any>;
  fontSize?: Size | number;
  focus?: boolean;
}

export const AppInput = forwardRef<HTMLInputElement, InputProps>(
  ({ leftIcon, style, focus, fontSize = 'sm', error, ...props }, ref) => (
    <Styled.InputContainer>
      {leftIcon || null}
      <Styled.Input
        fontSize={typeof fontSize === 'string' ? TEXT_SIZES[fontSize] : fontSize}
        style={style}
        {...props}
        ref={ref}
        autoFocus={focus}
      />
      {error && <Styled.ErrorContainer>{error}</Styled.ErrorContainer>}
    </Styled.InputContainer>
  ),
);
