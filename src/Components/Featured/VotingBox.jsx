import React from 'react';
import StyledVotingBox from './Styled/StyledVotingBox';
import VoteButtons from './VoteButtons';
import VotingBoxBackground from './Styled/StyledVotingBoxBackground';
import VotingBoxDescription from './Styled/StyledVotingBoxDescription';
import VotingBoxHeading from './Styled/StyledVotingBoxHeading';
import VotingBoxName from './Styled/StyledVotingBoxName';
import VotingBoxQuestion from './Styled/StyledVotingBoxQuestion';
import VotingBoxWrapper from './Styled/StyledVotingBoxWrapper';
import WikiLink from './WikiLink';

export default ({
  description,
  name,
  wikiLink,
}) => (
  <VotingBoxWrapper>
    <StyledVotingBox>
      <VotingBoxBackground />
      <VotingBoxHeading>
        What's your opinion on
      </VotingBoxHeading>
      <VotingBoxName>
        {name}?
      </VotingBoxName>
      <VotingBoxDescription>
        {description}
      </VotingBoxDescription>
      {
        wikiLink &&
        <WikiLink link={wikiLink} />
      }
      <VotingBoxQuestion>
        What's your verdict?
      </VotingBoxQuestion>
      <VoteButtons />
    </StyledVotingBox>
  </VotingBoxWrapper>
);
