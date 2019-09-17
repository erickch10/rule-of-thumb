import styled from 'styled-components';
import { COLORS } from '../../../Constants';

export default styled.p`
  color: ${COLORS.darkerGrey};
  flex-grow: 1;
  font-size: 30px;
  font-weight: 300;
  margin: 0;
  margin-right: 20px;

  @media only screen and (max-width: 575px) {
    margin-bottom: 20px;
  }
`;
