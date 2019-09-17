import React from 'react';
import AlertEmphasis from './Styled/StyledAlertEmphasis';
import StyledAlertImportant from './Styled/StyledAlertImportant';

export default ({
  children,
  emphasis,
}) => (
  <StyledAlertImportant>
    {children}
    {
      emphasis &&
      <AlertEmphasis>
        {emphasis}
      </AlertEmphasis>
    }
  </StyledAlertImportant>
);
