import React from 'react';
import StyledPersonCardName from './Styled/StyledPersonCardName';
import VoteButton from '../VoteButton';

export default ({ children, votes }) => (
  <StyledPersonCardName>
    {
      !!votes &&
      <VoteButton
        borderless
        className="person-card-most-voted"
        size="small"
        type={votes.down > votes.up ? 'down' : 'up'}
      />
    } {children}
  </StyledPersonCardName>
);
