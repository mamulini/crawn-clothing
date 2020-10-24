import styled from 'styled-components';
import StripeButton from '../../components/stripe-button/stripe-button';

export const CheckoutPageContainer = styled.div`
  max-width: 900px;
  min-height: 90vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 20px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const TotalPrice = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
export const TestWarning = styled.div`
  margin: 30px auto;
  text-align: center;
  font-size: 20px;
  color: red;
`;

export const StyledStripeButton = styled(StripeButton)`
  margin-left: auto;
  margin-bottom: 15px;
`;
