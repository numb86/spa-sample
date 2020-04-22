import React from 'react';
import ReactDOM from 'react-dom';

import {App} from '@src/App';

const renderApp = () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('@src/App', () => {
    renderApp();
  });
}

renderApp();
