import React from 'react';
import AlertClose from './AlertClose';
import AlertContent from './Styled/StyledAlertContent';
import AlertImportant from './AlertImportant';
import StyledAlert from './Styled/StyledAlert';

export default ({
  children,
  close,
  emphasis,
  important,
  onClose,
}) => (
  <StyledAlert>
    <AlertContent>
      {
        important &&
        <AlertImportant emphasis={emphasis}>
          {important}
        </AlertImportant>
      }
      {children}
    </AlertContent>
    {
      close &&
      <AlertClose
        onClick={onClose}
      />
    }
  </StyledAlert>
);
