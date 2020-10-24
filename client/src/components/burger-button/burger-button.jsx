import React from 'react';
import PropTypes from 'prop-types';
import { StyledBurgerButton } from './burger-button.style';

const BurgerButton = ({ open, setOpen }) => (
  <StyledBurgerButton open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurgerButton>
);

BurgerButton.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func
};

export default BurgerButton;
