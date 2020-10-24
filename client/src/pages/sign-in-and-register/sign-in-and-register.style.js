import styled from 'styled-components';

export const SigninAndRegisterContainer = styled.div`
  max-width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 10px auto;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    max-width: 400px;
  }
`;
