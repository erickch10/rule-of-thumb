import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: ${({ downPercentage, upPercentage }) => (
    `${upPercentage}% ${downPercentage}%`
  )};
  grid-template-rows: 50px;
  left: 0;
  position: absolute;
  right: -1px;
  top: 0;
  z-index: 0;
`;
