import React from 'react';
import StyledMenu from './Styled/StyledMenu';
import StyledMenuOption from './Styled/StyledMenuOption';
import { MENU_OPTIONS } from './config';

export default ({ className }) => (
  <StyledMenu className={className}>
    {MENU_OPTIONS.map(({ label, name, path }) => (
      <StyledMenuOption key={name} to={path}>
        {label}
      </StyledMenuOption>
    ))}
  </StyledMenu>
);
