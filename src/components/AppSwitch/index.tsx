import React, { FC, memo, useState } from 'react';
import * as Styled from './styles';
import { Props } from './types';

export const AppSwitch: FC<Props> = memo(({ size = 'md', checked = false, handleToggle }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleSwitchToggle = () => {
    handleToggle(!isChecked);
    setIsChecked((checked) => !checked);
  };

  return (
    <Styled.Wrapper>
      <Styled.Switch
        onChange={handleSwitchToggle}
        checked={isChecked}
        switchSize={size}
        type="checkbox"
        id="switch-input"
      />
      <Styled.SwitchLabel switchSize={size} htmlFor="switch-input" />
    </Styled.Wrapper>
  );
});
