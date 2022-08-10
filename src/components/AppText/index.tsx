import React, { FC, memo } from 'react';
import { TEXT_SIZES } from '@constants/textSizes';
import { Props } from './types';
import * as Styled from './styles';

export const AppText: FC<Props> = memo(
  ({ size = 'sm', tag = 'p', text = '', color = 'textColor', style }) => (
    <Styled.Text
      style={style}
      color={color}
      fontSize={typeof size === 'string' ? TEXT_SIZES[size] : size}
      as={tag}
    >
      {text}
    </Styled.Text>
  ),
);
