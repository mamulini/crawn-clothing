import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    background: #000000;
    /* transform: translate(-50%, -50%); */
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    width: 70%;
    height: 100vh;
    text-align: left;
    padding: 20px;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 7;
    opacity: 0.7;
  }
`;

export const NavbarLink = styled(Link)`
  padding: 10px 15px;

  @media screen and (max-width: 700px) {
    color: #ffffff;
  }
`;

// opacity: 0;
//     padding: 35px 0 0 20px;
//     flex-direction: column;
//     justify-content: flex-start;
//     position: fixed;
//     color: #ffffff;
//     top: 0;
//     left: 40%;
//     bottom: 0;
//     right: 0;
//     z-index: 5;
//     transform: translateX(100%);
//     transition: all 500ms cubic-bezier(0.5, 0, 0.5, 1);
//     background: #000000;
