import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import Register from '../../components/register/register';
import './sign-in-and-register.styles.scss';

const SigninAndRegister = () => (
  <div className="sign-in-up">
    <SignIn />
    <Register />
  </div>
);

export default SigninAndRegister;
