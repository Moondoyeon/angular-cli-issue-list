import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import PostListProvider from './context/postListContext';
import GlobalStyle from './styles/GlobalStyle';
import { colors } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PostListProvider>
        <ThemeProvider theme={colors}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </PostListProvider>
    </BrowserRouter>
  </React.StrictMode>
);
