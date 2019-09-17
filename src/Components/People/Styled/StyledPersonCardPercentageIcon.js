import styled from 'styled-components';

export default styled.img`
  margin-left: ${({ type }) => type === 'down' ? '8px' : '0'};
  margin-right: ${({ type }) => type === 'up' ? '8px' : '0'};
  height: 28px;
`;
