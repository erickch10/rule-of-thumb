import styled from 'styled-components';
import { COLORS } from '../../../Constants';
import {
  VOTE_BUTTON_BACKGROUNDS,
  VOTE_BUTTON_HEIGHTS,
  VOTE_BUTTON_WIDTHS,
} from '../config';

export default styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: ${({ opacity, size, type }) => (
    COLORS[`${VOTE_BUTTON_BACKGROUNDS[type]}${opacity}`]
  )};
  border: ${({ active, borderless }) => borderless ? 'none' : '2px solid transparent'};
  border-color: ${({ active, borderless }) => !borderless && active && COLORS.white};
  cursor: ${({ onClick }) => onClick ? 'pointer' : 'default'};
  display: flex;
  height: ${({ size }) => VOTE_BUTTON_HEIGHTS[size]};
  justify-content: center;
  width: ${({ size }) => VOTE_BUTTON_WIDTHS[size]};
`;
