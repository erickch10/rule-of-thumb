import styled from 'styled-components';
import { COLORS } from '../../../Constants';

export default styled.div`
  align-items: center;
  border-top: 1px dotted ${COLORS.darkerGrey};
  display: flex;
  margin: 0 auto;
  max-width: 1024px;
  padding: 34px 0;
  width: calc(100% - 80px);
`;
