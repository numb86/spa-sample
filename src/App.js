import React, {useEffect} from 'react';
import {createGlobalStyle} from 'styled-components';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const isProductionEnvironment = process.env.NODE_ENV === 'production';

const BASE_URL = isProductionEnvironment ? '/spa-sample/' : '/';

const Home = () => <>This is <b>home</b> page.</>;
const About = () => <>This is <b>about</b> page.</>;

const NotFound = () => {
  useEffect(() => {
    if (isProductionEnvironment) {
      const url = new URL(window.location);
      url.searchParams.append('notFound', 'true');
      window.location.replace(url.href);
    }
  });

  return isProductionEnvironment ? null : <div>Not Found.</div>;
};

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
        <Route path="*">
          <NotFound />
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
