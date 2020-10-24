import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { SignInContainer, ButtonsContainer, SignInSubtitle, SignInTitle } from './sign-in.style';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

const SignIn = ({ googleSignIn, emailSignIn }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = event => {
    event.preventDefault();

    emailSignIn(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <SignInSubtitle>Sign in with your email and password</SignInSubtitle>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <ButtonsContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={googleSignIn} isGoggleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

SignIn.propTypes = {
  googleSignIn: PropTypes.func,
  emailSignIn: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  googleSignIn: () => dispatch(googleSignInStart()),
  emailSignIn: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
