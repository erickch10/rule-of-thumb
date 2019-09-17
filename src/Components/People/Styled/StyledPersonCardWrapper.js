import styled from 'styled-components';
import { COLORS } from '../../../Constants';

export default styled.li`
  background-image: url('${props => props.photo}');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  * {
    color: ${COLORS.white};
  }
`;
