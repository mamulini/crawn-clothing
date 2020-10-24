import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  width: 300px;
  height: 450px;
  background: white;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  flex: 0 0 25%;
  margin-bottom: 20px;

  @media screen and (min-width: 801px) and (max-width: 950px) {
    height: 350px;
    max-width: 265px;
  }

  @media screen and (max-width: 800px) {
    flex: 0 0 50%;
  }

  @media screen and (max-width: 500px) {
    height: 350px;
  }

  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled.div`
  height: 80%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 801px) and (max-width: 950px) {
    height: 75%;
  }

  @media screen and (max-width: 500px) {
    height: 70%;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  transition: transform 0.5s;
  background: #ffffff;
  /* background: #f4f4f4; */

  @media screen and (min-width: 801px) and (max-width: 950px) {
    height: 25%;
  }

  @media screen and (max-width: 500px) {
    height: 30%;
  }
`;

export const Details = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.p`
  margin: 0;
  padding: 0;
  font-size: 20px;
  @media screen and (min-width: 801px) and (max-width: 950px) {
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;
export const Price = styled.strong`
  margin: 0;
  font-size: 22px;
  padding-top: 5px;

  /* @media screen and (max-width: 500px) {
    font-size: 14px;
    padding-top: 5px;
  } */
`;

export const AddButton = styled.div`
  width: calc(30% - 2px);
  height: 100%;
  background: #ffffff;
  /* background: #f1f1f1; */
  transition: background 0.5s;
  border-left: solid thin rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;
  i {
    display: block;
    font-size: 30px;
    padding: 10px;
    color: #254053;
    transition: transform 0.5s;
  }
  &:hover {
    background: #a6cdde;
  }
  &:hover i {
    transform: translateY(5px);
    color: #00394b;
  }
  &:active i {
    transform: scale(1.7);
  }

  span {
    padding-top: 10px;

    @media screen and (max-width: 500px) {
      font-size: 14px;
      padding-top: 5px;
    }
  }
`;
