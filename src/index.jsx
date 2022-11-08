import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import IssueListProvider from './context/IssueListContext';
import GlobalStyle from './styles/GlobalStyle';
import { colors } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IssueListProvider>
        <ThemeProvider theme={colors}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </IssueListProvider>
    </BrowserRouter>
  </React.StrictMode>
);
