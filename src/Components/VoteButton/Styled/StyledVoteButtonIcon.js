import styled from 'styled-components';
import { VOTE_BUTTON_ICON_SIZES } from '../config';

export default styled.img`
  width: ${({ size }) => VOTE_BUTTON_ICON_SIZES[size]};
`;
