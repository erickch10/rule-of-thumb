import styled from 'styled-components';

export default styled.div`
  flex-grow: 1;

  .footer-link:not(:last-child) {
    margin-right: 28px;
  }

  @media only screen and (max-width: 520px) {
    .footer-link {
      display: block;
    }
  }
`;
