import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import Page from './components/Page';
import './App.css';
import Header from './components/Header';
import store from './store';


class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Page />
        </div>
      </Provider >
    );
  }
}

export default App;
