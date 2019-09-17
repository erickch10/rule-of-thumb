import styled from 'styled-components';
import { COLORS } from '../../../Constants';

export default styled.div`
  background-color: rgba(0, 0, 0, 0.45);
  bottom: 80px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;

  @media only screen and (max-width: 600px) {
    background-color: ${COLORS.darkerGrey};
  }
`;
