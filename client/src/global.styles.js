import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body{
  font-family: 'Open Sans Condenced', sans-serif;
  padding: 20px 30px;
  height: 100vh;
  background: #F5F5F5;

  @media screen and (max-width: 810px){
    padding: 10px;
    height: unset;
  }

}

a {
  text-decoration: none;
  color: #000;
}
`;

export default GlobalStyles;
