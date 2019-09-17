import React from 'react';
import StyledPersonCardPublished from './Styled/StyledPersonCardPublished';
import { getTimeDifference } from '../../Helpers';

export default ({ category, datetime }) => {
  const timeDiff = getTimeDifference(datetime);

  return (
    <StyledPersonCardPublished>
      <span className="person-card-published">
        {timeDiff} ago
      </span> in {category}
    </StyledPersonCardPublished>
  );
};
