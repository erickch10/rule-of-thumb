import React from 'react';
import VoteButtonIcon from './VoteButtonIcon';
import StyledVoteButton from './Styled/StyledVoteButton';

const VoteButton = props => (
  <StyledVoteButton {...props}>
    <VoteButtonIcon {...props} />
  </StyledVoteButton>
);

VoteButton.defaultProps = {
  opacity: '',
};

export default  VoteButton;
