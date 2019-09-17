import styled from 'styled-components';
import { COLORS } from '../../../Constants';

export default styled.div`
  align-items: center;
  background-color: ${COLORS.white85};
  display: flex;
  padding: 20px;

  @media only screen and (max-width: 575px) {
    display: block;
    text-align: center;
  }
`;
