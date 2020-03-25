import React from 'react';
import {createGlobalStyle} from 'styled-components';

export const App = () => <div><GlobalStyle />Hello React!</div>;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #eee;
  }
`;
