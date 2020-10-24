import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const LogoWrapper = styled(Link)`
  height: 100%;
  width: 100px;
  padding: 15px;

  svg {
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    width: 70px;
  }
`;

export const OptionContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    width: 70%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
`;
