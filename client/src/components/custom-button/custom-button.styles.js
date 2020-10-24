import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSigninStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #fff;
    color: #4285f4;
    border: 1px solid #000;
  }
`;

const getButtonStyles = props => {
  if (props.isGoggleSignIn) return googleSigninStyles;

  return props.inverted ? invertedStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 100px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 15px 0 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 5px;

  ${getButtonStyles}

  @media screen and (max-width: 430px) {
    padding: 0 10px 0 10px;
    font-size: 12px;
    min-width: auto;
  }
`;
