import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  font-size: 12px;
  font-weight: 300;

  @media only screen and (max-width: 375px) {
    font-size: 10px;
  }
`;
