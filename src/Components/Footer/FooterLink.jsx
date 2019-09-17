import React from 'react';
import StyledFooterLink from './Styled/StyledFooterLink';

export default ({ label, path }) => (
  <StyledFooterLink
    className="footer-link"
    to={path}
  >
    {label}
  </StyledFooterLink>
);
