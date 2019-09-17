import styled from 'styled-components';
import { COLORS } from '../../../Constants';

export default styled.div`
  align-items: center;
  background-color: ${COLORS.lightGrey};
  color: ${COLORS.darkerGrey};
  display: flex;
  font-weight: 300;
  padding: 24px;

  @media only screen and (max-width: 575px) {
    text-align: center;
  }
`;
