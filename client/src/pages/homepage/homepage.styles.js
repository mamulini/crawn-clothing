import styled from 'styled-components';

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;

  @media screen and (max-width: 700px) {
    padding: 10px 5px;
  }
`;
