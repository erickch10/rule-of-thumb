import React from 'react';
import AlertCloseButton from './Styled/StyledAlertCloseButton';
import AlertCloseIcon from './Styled/StyledAlertCloseIcon';

export default props => (
  <AlertCloseButton {...props}>
    <AlertCloseIcon
      src="/img/icons/close.png"
    />
  </AlertCloseButton>
);
