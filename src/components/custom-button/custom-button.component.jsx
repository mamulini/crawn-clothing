import React from 'react';
import PropTypes from 'prop-types';
import './custom-button.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.string
};

export default CustomButton;
