import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  flex-shrink: 0;
  font-size: 32px;
  font-weight: 400;
  line-height: 30px;

  @media only screen and (max-width: 600px) {
    flex-grow: 1;
  }
`;
