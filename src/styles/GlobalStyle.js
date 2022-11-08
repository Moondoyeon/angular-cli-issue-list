import { createGlobalStyle } from 'styled-components';
import { flexBox, responsive } from './mixin';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
  padding: 0;
}
body {
  ${flexBox('column', 'center', 'center')};  
}
.App {
  width:100vw;
  ${flexBox()};
  ${responsive('phone')} {
    padding: 0;
  }
}

a {
  text-decoration:none;
  color:${({ theme }) => theme.darkGrayColor};
}
`;

export default GlobalStyle;
