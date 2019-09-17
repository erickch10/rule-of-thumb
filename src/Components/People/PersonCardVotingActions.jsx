import React from 'react';
import Button from '../Global/Button';
import StyledPersonVotingActions from './Styled/StyledPersonVotingActions';
import VoteButton from '../VoteButton';

export default ({
  index,
  onVote,
  onVoteAgain,
  onVoteTypeSelect,
  voteType,
  wasVoted,
}) => (
  <StyledPersonVotingActions>
    {
      wasVoted
      ? <Button
        onClick={onVoteAgain}
        size="small"
        value={index}
      >
        Vote again
      </Button>
      : <React.Fragment>
        <VoteButton
          active={voteType === 'up'}
          name="up"
          onClick={onVoteTypeSelect}
          size="small"
          type="up"
          value={index}
        />
        <VoteButton
          active={voteType === 'down'}
          name="down"
          onClick={onVoteTypeSelect}
          size="small"
          type="down"
          value={index}
        />
        <Button
          disabled={!voteType}
          onClick={onVote}
          size="small"
          value={index}
        >
          Vote now
        </Button>
      </React.Fragment>
    }
  </StyledPersonVotingActions>
);
