import styled from 'styled-components';
import { VOTE_TYPE_ALIGNMENTS } from '../config';

export default styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${({ type }) => VOTE_TYPE_ALIGNMENTS[type]};
  padding: 11px 10px;
`;
