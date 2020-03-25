import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const Home = () => <>This is <b>home</b> page.</>;
const About = () => <>This is <b>about</b> page.</>;

export const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <h1>Hello SPA!</h1>
      <nav>
        <Link to="./">to home</Link> <Link to="./about">to about</Link>
      </nav>
      <Switch>
        <Route exact path="./">
          <Home />
        </Route>
        <Route path="./about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #eee;
  }
`;
