import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { RegisterContainer, Title, RegisterForm, Subtitle } from './register.styles';
import { registerStart } from '../../redux/user/user.actions';
// import './register.styles.scss';

const Register = ({ registerStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    registerStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <RegisterContainer>
      <Title>I do not have an account</Title>
      <Subtitle>Sign up with your email and password</Subtitle>
      <RegisterForm onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </RegisterForm>
    </RegisterContainer>
  );
};

Register.propTypes = {
  registerStart: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  registerStart: userCredentials => dispatch(registerStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(Register);
