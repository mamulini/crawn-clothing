import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/logo_crown.svg';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { currentUserSelector } from '../../redux/user/user.selectors';
import { hiddenSelector } from '../../redux/cart/cart.selectors';
import { HeaderContainer, LogoWrapper, OptionContainer, OptionLink } from './header.styles';
// import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoWrapper to="/">
      <Logo className="logo" />
    </LogoWrapper>
    <OptionContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACTS</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon onClick={() => this.props.toogleCart()} />
    </OptionContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

Header.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden: hiddenSelector
});

export default connect(mapStateToProps)(Header);
