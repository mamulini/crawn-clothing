import React from 'react';
import PropTypes from 'prop-types';

import { GroupContainer, Input, InputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <Input onChange={handleChange} {...otherProps} />
    <InputLabel label={label} value={otherProps.value}>
      {label}
    </InputLabel>
  </GroupContainer>
);

FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string
};

export default FormInput;
