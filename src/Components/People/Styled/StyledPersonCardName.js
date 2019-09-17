import styled from 'styled-components';

export default styled.h1`
  font-size: 45px;
  font-weight: 400;
  line-height: 54px;
  margin: 0;
  position: relative;
  width: 90%;

  .person-card-most-voted {
    bottom: 12px;
    left: -40px;
    position: absolute;
  }

  @media only screen and (max-width: 900px) {
    font-size: 30px;
    line-height: 40px;

    .person-card-most-voted {
      bottom: 4px;
      left: -35px;
    }
  }
`;
