import React from 'react';
import FooterLink from './FooterLink';
import StyledFooterLinks from './Styled/StyledFooterLinks';
import { FOOTER_LINKS } from './config';

export default () => (
  <StyledFooterLinks>
    {FOOTER_LINKS.map(({ name, ...link }) => (
      <FooterLink key={name} {...link} />
    ))}
  </StyledFooterLinks>
);
