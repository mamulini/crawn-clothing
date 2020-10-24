import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionPageTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionPageItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;
