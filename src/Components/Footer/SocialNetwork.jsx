import React from 'react';
import SocialNetworkLogo from './Styled/StyledSocialNetworkLogo';
import StyledSocialNetwork from './Styled/StyledSocialNetwork';

export default ({ link, logo }) => (
  <StyledSocialNetwork
    className="social-network"
    href={link}
    rel="noopener noreferrer"
    target="_blank"
  >
    <SocialNetworkLogo src={logo} />
  </StyledSocialNetwork>
);
