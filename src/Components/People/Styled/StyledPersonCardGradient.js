import styled from 'styled-components';

export default styled.div`
  background-image: linear-gradient(0deg, black 0%, transparent 50%);
  padding-top: 110%;
  position: relative;
  width: 100%;

  @media only screen and (max-width: 600px) {
    background-image: linear-gradient(0deg, black 0%, transparent 90%);
  }
`;
