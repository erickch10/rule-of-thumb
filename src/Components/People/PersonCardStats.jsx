import React from 'react';
import PersonCardPercentage from './PersonCardPercentage';
import PersonCardPercentages from './Styled/StyledPersonCardPercentages';
import PersonCardStatsBar from './Styled/StyledPersonCardStatsBar';
import PersonCardStatsBars from './Styled/StyledPersonCardStatsBars';
import StyledPersonCardStats from './Styled/StyledPersonCardStats';

export default ({ votes: { down, up } }) => {
  const total = down + up;
  const downPercentage = down * 100 / total;
  const upPercentage = up * 100 / total;

  return (
    <StyledPersonCardStats>
      <PersonCardStatsBars
        downPercentage={downPercentage}
        upPercentage={upPercentage}
      >
        <PersonCardStatsBar type="up" />
        <PersonCardStatsBar type="down" />
      </PersonCardStatsBars>
      <PersonCardPercentages>
        <PersonCardPercentage
          percentage={upPercentage}
          type="up"
        />
        <PersonCardPercentage
          percentage={downPercentage}
          type="down"
        />
      </PersonCardPercentages>
    </StyledPersonCardStats>
  );
};
