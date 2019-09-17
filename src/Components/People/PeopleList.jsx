import React from 'react';
import PersonCard from './PersonCard';
import StyledPeopleList from './Styled/StyledPeopleList';

export default ({
  getVoteType,
  people,
  wasVoted,
  ...props
}) => (
  <StyledPeopleList>
    {people.map((person, key) => (
      <PersonCard
        index={key}
        key={`person-${key}`}
        voteType={getVoteType(key)}
        wasVoted={wasVoted(key)}
        {...props}
        {...person}
      />
    ))}
  </StyledPeopleList>
);
