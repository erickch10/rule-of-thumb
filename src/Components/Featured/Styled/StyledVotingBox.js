import styled from 'styled-components';

export default styled.div`
  max-width: 500px;
  overflow: hidden;
  padding: 40px 36px 110px;
  position: relative;
  width: 100%;

  >* {
    position: relative;
    z-indeX: 10;
  }

  @media only screen and (max-width: 600px) {
    max-width: none;
  }
`;
