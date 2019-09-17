import React from 'react';
import Button from '../Global/Button';
import AddPersonLabel from './Styled/StyledAddPersonLabel';
import AddPersonWrapper from './Styled/StyledAddPersonWrapper';
import StyledAddPerson from './Styled/StyledAddPerson';

export default () => (
  <AddPersonWrapper>
    <StyledAddPerson>
      <AddPersonLabel>
        Is there anyone else you want us to add?
      </AddPersonLabel>
      <Button size="big" theme="dark">
        Submit a Name
      </Button>
    </StyledAddPerson>
  </AddPersonWrapper>
);
