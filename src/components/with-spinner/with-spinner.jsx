import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './wirh-spinner.styles';

const WithSpinner = WrappedComponent => {
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return spinner;
};

export default WithSpinner;
