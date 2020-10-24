import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import Register from '../../components/register/register';
import { SigninAndRegisterContainer } from './sign-in-and-register.style';
const SigninAndRegister = () => (
  <SigninAndRegisterContainer>
    <SignIn />
    <Register />
  </SigninAndRegisterContainer>
);

export default SigninAndRegister;
