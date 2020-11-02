import React from 'react';

import {ErrorImageContainer,ErrorImageOverlay,ErrorImageText} from './error-boundery.style'

class ErrorBoundary extends React.Component{
  constructor(){
    super();

    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error){
    console.log(error)
    return {hasError: true}
  }

  componentDidCatch(error, info){
    console.log(error);
  }

  render(){
    if(this.state.hasError) {
      return(
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/g3hgqe8.png'/>
          <ErrorImageText>This Page is Broken!</ErrorImageText>    
        </ErrorImageOverlay>
      )
    }

    return this.props.children
  }

}

export default ErrorBoundary;
