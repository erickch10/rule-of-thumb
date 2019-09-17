import styled from 'styled-components';
import { COLORS } from '../../../Constants';

export default styled.div`
  background-color: ${COLORS.white70};
  clip-path: polygon(0% 100%, 0% 30.5px, 7px 50%, 0% 19.5px, 0% 0%, 100% 0%, 100% 100%);
  color: ${COLORS.darkGrey};
  font-size: 36px;
  font-weight: 300;
  line-height: 50px;
  padding-left: 16px;
  text-align: left;
`;
