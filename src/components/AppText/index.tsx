import React, { FC, memo } from 'react';
import { TEXT_SIZES } from '@constants/textSizes';
import useWindowDimensions from '@utils/hooks/useWindowDimensions';
import { Props } from './types';
import * as Styled from './styles';

export const AppText: FC<Props> = memo(
  ({ size = 'md', tag = 'p', text = '', color = 'textColor', className }) => {
    const { isMobile } = useWindowDimensions();
    return (
      <Styled.Text
        className={className}
        color={color}
        fontSize={
          typeof size === 'string' ? TEXT_SIZES[isMobile ? 'mobile' : 'default'][size] : size
        }
        as={tag}
      >
        {text}
      </Styled.Text>
    );
  },
);
