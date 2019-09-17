import styled from 'styled-components';
import { VOTE_TYPE_BACKGROUNDS } from '../config';

export default styled.div`
  background-color: ${({ type }) => VOTE_TYPE_BACKGROUNDS[type]};
`;
