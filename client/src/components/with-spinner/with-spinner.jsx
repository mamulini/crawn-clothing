import React from 'react';
import Spinner from '../spinner/spinner';
const WithSpinner = WrappedComponent => {
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <Spinner />
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return spinner;
};

export default WithSpinner;
