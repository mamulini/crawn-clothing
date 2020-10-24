import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const StyledCartIcon = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  z-index: 20;
`;

export const StyledShopingIcon = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;

  @media screen and (max-width: 700px) {
    path {
      fill: #ffffff !important;
      /* fill: ${({ open }) => (open ? '#ffffff !important' : 'red !important')}; */
    }
  }
`;

export const StyledItemCount = styled.span`
  position: absolute;
  font-size: 11px;
  font-weight: bold;
  bottom: 13px;

  @media screen and (max-width: 700px) {
    color: #ffffff;
  }
`;
