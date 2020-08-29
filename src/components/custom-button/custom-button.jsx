import React from 'react';
import PropTypes from 'prop-types';

import { CustomButtonContainer } from './custom-button.styles';
// import './custom-button.styles.scss';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

CustomButton.propTypes = {
  children: PropTypes.string,
  isGoggleSignIn: PropTypes.bool,
  inverted: PropTypes.bool
};

export default CustomButton;
