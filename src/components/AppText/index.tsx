import { TEXT_SIZES } from '@constants/textSizes';
import React, { FC, memo } from 'react';
import * as Styled from './styles';
import { Props } from './types';

export const AppText: FC<Props> = memo(({ size = 'sm', tag = 'p', text = '', style }) => (
  <Styled.Text style={style} fontSize={typeof size === 'string' ? TEXT_SIZES[size] : size} as={tag}>
    {text}
  </Styled.Text>
));
