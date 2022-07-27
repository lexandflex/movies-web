import React from 'react';
import * as Styled from './styles';

export const AppSpinner = ({ size = 25, strokeWidth = 4 }) => {
  console.log('test');

  return (
    <Styled.Spinner size={size}>
      <circle
        cx={size}
        cy={size}
        r={size - strokeWidth}
        fill="none"
        strokeWidth={strokeWidth}
        color="white"
      />
      ;
    </Styled.Spinner>
  );
};
