import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/logo_crown.svg';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import Navbar from '../navbar/navbar';
import BurgerButton from '../burger-button/burger-button';
import { hiddenSelector } from '../../redux/cart/cart.selectors';
import { HeaderContainer, LogoWrapper } from './header.styles';

const Header = ({ hidden }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setMobile] = useState(window.innerWidth > 700);

  const updateMedia = () => {
    setMobile(window.innerWidth > 700);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <HeaderContainer>
      <LogoWrapper to="/">
        <Logo className="logo" />
      </LogoWrapper>

      {isMobile ? (
        <>
          <Navbar open={open} setOpen={setOpen} />
          <CartIcon open={open} />
        </>
      ) : (
        <>
          <BurgerButton open={open} setOpen={setOpen} />
          <Navbar open={open} setOpen={setOpen}>
            <CartIcon open={open} />
          </Navbar>
        </>
      )}

      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

Header.propTypes = {
  hidden: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  hidden: hiddenSelector
});

export default connect(mapStateToProps)(Header);
