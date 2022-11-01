import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
  padding: 0;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0px;
  background-color: white;
  padding:20px;
}
.App {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  border-color: ${({ theme }) => theme.borderColor};
  border-radius:3px;
}
/* 500px 이하일때 */
@media screen and (max-width: 500px) {
  .App {
    width: 375px;
  }
}
`;

export default GlobalStyle;
