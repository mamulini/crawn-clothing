import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { RegisterContainer, Title, RegsterForm, Subtitle } from './register.styles';
import { registerStart } from '../../redux/user/user.actions';
// import './register.styles.scss';

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { registerStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    registerStart({ displayName, email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <RegisterContainer>
        <Title>I do not have an account</Title>
        <Subtitle>Sign up with your email and password</Subtitle>
        <RegsterForm onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </RegsterForm>
      </RegisterContainer>
    );
  }
}

Register.propTypes = {
  registerStart: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  registerStart: userCredentials => dispatch(registerStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(Register);
