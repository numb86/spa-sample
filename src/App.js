import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const BASE_URL = process.env.NODE_ENV === 'production' ? '/spa-sample/' : '/';

const Home = () => <>This is <b>home</b> page.</>;
const About = () => <>This is <b>about</b> page.</>;

export const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <h1>Hello SPA!</h1>
      <nav>
        <Link to={BASE_URL}>to home</Link> <Link to={`${BASE_URL}about`}>to about</Link>
      </nav>
      <Switch>
        <Route exact path={BASE_URL}>
          <Home />
        </Route>
        <Route path={`${BASE_URL}about`}>
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
