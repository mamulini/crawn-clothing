import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const PreviewTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  border: solid 1px transparent;
  margin-right: auto;
  padding: 5px 10px;

  &:hover {
    border: 1px solid black;
  }
`;

export const CollectionItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
