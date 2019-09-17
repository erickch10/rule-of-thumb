import React from 'react';
import StyledPageTitle from './Styled/StyledPageTitle';

export default ({ children }) => (
  <StyledPageTitle to="/">
    {children}
  </StyledPageTitle>
);
