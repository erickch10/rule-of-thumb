import styled from 'styled-components';
import {
  BUTTON_BACKGROUNDS,
  BUTTON_BORDER_WIDTHS,
  BUTTON_COLORS,
  BUTTON_FONT_SIZES,
  BUTTON_HEIGHTS,
  BUTTON_WIDTHS,
} from './config';

const Button = styled.button`
  background-color: ${({ theme }) => BUTTON_BACKGROUNDS[theme]};
  border-color: ${({ theme }) => BUTTON_COLORS[theme]};
  border-style: solid;
  border-width: ${({ size }) => BUTTON_BORDER_WIDTHS[size]};
  color: ${({ theme }) => BUTTON_COLORS[theme]};
  cursor: ${({ disabled, onClick }) => !disabled && onClick ? 'pointer' : 'default'};
  font-size: ${({ size }) => BUTTON_FONT_SIZES[size]};
  font-weight: 400;
  height: ${({ size }) => BUTTON_HEIGHTS[size]};
  line-height: ${({ size }) => BUTTON_HEIGHTS[size]};
  min-width: ${({ size }) => BUTTON_WIDTHS[size]};
`;

Button.defaultProps = {
  theme: 'light',
};

export default Button;
