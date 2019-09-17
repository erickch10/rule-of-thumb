import styled from 'styled-components';

export default styled.ul`
  display: grid;
  grid-template-columns: calc(50% - 20px) calc(50% - 20px);
  grid-gap: 40px;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
