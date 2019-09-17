import styled from 'styled-components';
import { COLORS } from '../../../Constants';

export default styled.div`
  bottom: 120px;
  left: 50%;
  max-width: 1024px;
  position: absolute;
  transform: translateX(-50%);
  width: calc(100% - 80px);

  * {
    color: ${COLORS.white};
  }

  @media only screen and (max-width: 600px) {
    bottom: 50px;
    position: relative;
    width: 100%;
  }
`;
