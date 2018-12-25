import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import Page from './components/Page';
import './App.css';
import Navbar from './components/Navbar';
import store from './store';


class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <Navbar />
            <Page />
          </div>
        </Provider >
      </BrowserRouter >
    );
  }
}

export default App;
