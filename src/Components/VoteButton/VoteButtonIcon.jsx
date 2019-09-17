import React from 'react';
import StyledVoteButtonIcon from './Styled/StyledVoteButtonIcon';
import { VOTE_BUTTON_ICONS } from './config';

export default ({ size, type }) => (
  <StyledVoteButtonIcon size={size} src={VOTE_BUTTON_ICONS[type]} />
);
