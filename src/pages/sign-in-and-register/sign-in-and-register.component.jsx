import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import Register from '../../components/register/register.component';
import './sign-in-and-register.scss';

const SigninAndRegister = () => (
  <div className="sign-in-up">
    <SignIn />
    <Register />
  </div>
);

export default SigninAndRegister;
