import React, { useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { checkUserSession } from './redux/user/user.actions';
import { currentUserSelector } from './redux/user/user.selectors';
import Header from './components/header/header';
import Spinner from './components/spinner/spinner';
import GlobalStyles from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage'));
const ShopPage = lazy(() => import('./pages/shop/shop'));
const CheckoutPage = lazy(() => import('./pages/checkout-page/checkout'));
const SigninAndRegister = lazy(() => import('./pages/sign-in-and-register/sign-in-and-register'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <SigninAndRegister />)}
          />
        </Switch>
      </Suspense>
    </div>
  );
};

App.propTypes = {
  currentUser: PropTypes.object,
  checkUserSession: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
