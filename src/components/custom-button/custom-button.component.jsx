import React from 'react';
import PropTypes from 'prop-types';
import './custom-button.scss';

const CustomButton = ({ children, isGoggleSignIn, ...otherProps }) => (
  <button
    className={`${isGoggleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.string,
  isGoggleSignIn: PropTypes.bool
};

export default CustomButton;
