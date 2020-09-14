import styled, { css } from 'styled-components';

const shrinkStyles = css`
  top: -14px;
  font-size: 12px;
  color: black;
`;

const labelStyles = ({ label }) => {
  if (label) {
    return css`
      color: gray;
      font-size: 16px;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 5px;
      top: 10px;
      transition: 300ms ease all;
    `;
  }
};

const labelOnFocus = ({ value }) => {
  if (value.length) {
    return shrinkStyles;
  }
};

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: gray;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid gray;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &[type='password'] {
    letter-spacing: 0.3em;
  }

  &:focus ~ label {
    ${shrinkStyles}
  }
`;

export const InputLabel = styled.label`
  ${labelStyles}
  ${labelOnFocus}
`;
