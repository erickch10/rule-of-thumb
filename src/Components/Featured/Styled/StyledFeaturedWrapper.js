import styled from 'styled-components';

export default styled.section`
  background-image: url('${props => props.photo}');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 740px;
  position: relative;
  width: 100%;

  @media only screen and (max-width: 600px) {
    background-image: none;
    height: auto;
  }
`;
