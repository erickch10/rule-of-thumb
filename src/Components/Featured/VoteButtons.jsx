import React from 'react';
import StyledVoteButtons from './Styled/StyledVoteButtons';
import VoteButton from '../VoteButton';

export default () => (
  <StyledVoteButtons>
    <VoteButton borderless opacity="90" size="big" type="up" />
    <VoteButton borderless opacity="90" size="big" type="down" />
  </StyledVoteButtons>
);
