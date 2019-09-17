import styled from 'styled-components';

export default styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 1024px;

  @media only screen and (max-width: 767px) {
    .main-menu {
      display: none;
    }
  }
`;
