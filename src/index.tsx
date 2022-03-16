import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxApp } from './components/App';
import { store } from './redux/store';
import './styles/index.less';

// kek lol
document.onreadystatechange = () => {
  if (document.readyState !== 'interactive') {
    return;
  }

  ReactDOM.render(
    <Provider store={store}>
      <ReduxApp />
    </Provider>,
    document.getElementById('App')
  );
};
