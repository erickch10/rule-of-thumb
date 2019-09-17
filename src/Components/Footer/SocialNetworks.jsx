import React from 'react';
import SocialNetwork from './SocialNetwork';
import SocialNetworksLabel from './Styled/StyledSocialNetworksLabel';
import StyledSocialNetworks from './Styled/StyledSocialNetworks';
import { SOCIAL_NETWORKS } from './config';

export default () => (
  <StyledSocialNetworks>
    <SocialNetworksLabel>
      Follow us
    </SocialNetworksLabel>
    {SOCIAL_NETWORKS.map(({ name, ...socialNetwork }) => (
      <SocialNetwork key={name} {...socialNetwork} />
    ))}
  </StyledSocialNetworks>
);
