import React from 'react';
import PersonCardContent from './Styled/StyledPersonCardContent';
import PersonCardDescription from './Styled/StyledPersonCardDescription';
import PersonCardGradient from './Styled/StyledPersonCardGradient';
import PersonCardName from './PersonCardName';
import PersonCardPublished from './PersonCardPublished';
import PersonCardStats from './PersonCardStats';
import PersonCardVotingActions from './PersonCardVotingActions';
import PersonCardWrapper from './Styled/StyledPersonCardWrapper';

export default ({
  category,
  description,
  index,
  name,
  onVote,
  onVoteAgain,
  onVoteTypeSelect,
  photo,
  publishDatetime,
  votes,
  voteType,
  wasVoted,
}) => {
  const votingActionsProps = {
    index,
    onVote,
    onVoteAgain,
    onVoteTypeSelect,
    voteType,
    wasVoted,
  };

  return (
    <PersonCardWrapper photo={photo}>
      <PersonCardGradient />
      <PersonCardContent>
        <PersonCardName votes={votes}>
          {name}
        </PersonCardName>
        <PersonCardPublished
          category={category}
          datetime={publishDatetime}
        />
        <PersonCardDescription>
          {description}
        </PersonCardDescription>
        <PersonCardVotingActions
          {...votingActionsProps}
        />
      </PersonCardContent>
      <PersonCardStats votes={votes} />
    </PersonCardWrapper>
  );
};
