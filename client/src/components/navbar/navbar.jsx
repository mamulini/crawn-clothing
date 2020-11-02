import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { currentUserSelector } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { NavbarContainer, NavbarLink } from './navbar.style';

const Navbar = ({ currentUser, signOutStart, open, setOpen, children }) => {
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (open === true && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <NavbarContainer ref={ref} open={open}>
      <NavbarLink to="/shop" onClick={() => setOpen(false)}>
        SHOP
      </NavbarLink>
      {/* <NavbarLink to="/" onClick={() => setOpen(false)}>
        CONTACTS
      </NavbarLink> */}
      {currentUser ? (
        <NavbarLink as="div" onClick={signOutStart}>
          SIGN OUT
        </NavbarLink>
      ) : (
        <NavbarLink to="/signin" onClick={() => setOpen(false)}>
          SIGN IN
        </NavbarLink>
      )}
      <div>{children}</div>
    </NavbarContainer>
  );
};

Navbar.propTypes = {
  currentUser: PropTypes.object,
  signOutStart: PropTypes.func,
  setOpen: PropTypes.func,
  open: PropTypes.bool,
  children: PropTypes.node
};

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
