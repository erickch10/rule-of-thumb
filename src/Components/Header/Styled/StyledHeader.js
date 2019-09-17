import styled from 'styled-components';
import { COLORS, FONT_COLORS } from '../../../Constants';

export default styled.header`
  background-image: linear-gradient(${COLORS.darkerGrey} 0%, transparent 66%);
  left: 50%;
  padding: 45px 40px 75px;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
  z-index: 100;

  * {
    color: ${props => FONT_COLORS[props.theme]};
  }

  .header-content {
    align-items: center;
    display: flex;
    margin: 0 auto;
    max-width: 1024px;
  }

  @media only screen and (max-width: 600px) {
    background-color: ${COLORS.darkerGrey};
    height: 70px;
    padding: 20px 40px;
    position: relative;
  }
`;
