import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  position: relative;
  background: lightgray;
  /* border-radius: 15px; */

  @media screen and (max-width: 950px) {
    height: 250px;
  }

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;
export const AddButton = styled(CustomButton)`
  width: 80%;
  position: absolute;
  opacity: 0.7;
  top: 255px;
  display: none;

  @media screen and (max-width: 950px) {
    top: 170px;
    height: auto;
    line-height: normal;
    padding: 10px 10px;
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  /* height: 5%; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
  text-align: center;
`;
export const PriceContainer = styled.span`
  text-align: center;
  font-weight: bold;
  padding-bottom: 5px;
`;
