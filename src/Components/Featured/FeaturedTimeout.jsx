import React from 'react';
import StyledFeaturedTimeout from './Styled/StyledFeaturedTimeout';
import FeaturedTimeoutDays from './Styled/StyledFeaturedTimeoutDays';
import FeaturedTimeoutLabel from './Styled/StyledFeaturedTimeoutLabel';
import FeaturedTimeoutTime from './Styled/StyledFeaturedTimeoutTime';
import { getRemainingDaysCount } from '../../Helpers';

export default ({ endDate }) => (
  <StyledFeaturedTimeout>
    <FeaturedTimeoutLabel>
      closing in
    </FeaturedTimeoutLabel>
    <FeaturedTimeoutTime>
      <FeaturedTimeoutDays>
        {getRemainingDaysCount(endDate)}
      </FeaturedTimeoutDays> days
    </FeaturedTimeoutTime>
  </StyledFeaturedTimeout>
);
