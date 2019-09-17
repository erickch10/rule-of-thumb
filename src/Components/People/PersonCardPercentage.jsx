import React from 'react';
import PersonCardPercentageIcon from './Styled/StyledPersonCardPercentageIcon';
import PersonCardPercentageLabel from './Styled/StyledPersonCardPercentageLabel';
import StyledPersonCardPercentage from './Styled/StyledPersonCardPercentage';
import { VOTE_TYPE_ICONS } from './config';

export default ({ percentage, type }) => {
  const decimals = percentage - Math.floor(percentage);
  return (
    <StyledPersonCardPercentage type={type}>
      <PersonCardPercentageIcon
        src={VOTE_TYPE_ICONS[type]}
        type={type}
      />
      <PersonCardPercentageLabel>
        {decimals ? percentage.toFixed(2) : percentage} %
      </PersonCardPercentageLabel>
    </StyledPersonCardPercentage>
  );
};
