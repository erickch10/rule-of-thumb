import styled from 'styled-components';

export default styled.div`
  background-image: url('${props => props.photo}');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: none;
  padding-top: 80%;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;
