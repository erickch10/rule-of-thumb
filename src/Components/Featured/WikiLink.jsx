import React from 'react';
import StyledWikiLink from './Styled/StyledWikiLink';
import WikiLinkIcon from './Styled/StyledWikiLinkIcon';
import WikiLinkLabel from './Styled/StyledWikiLinkLabel';

export default ({ link }) => (
  <StyledWikiLink href={link}>
    <WikiLinkIcon src="/img/icons/wiki.png" />
    <WikiLinkLabel>
      More information
    </WikiLinkLabel>
  </StyledWikiLink>
);
