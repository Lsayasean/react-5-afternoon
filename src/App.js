import React, { Component } from 'react';
import { Provider } from 'react-redux';
import myStore from './ducks/store';
import { HashRouter } from 'react-router-dom';
import './App.css';
import router from './router'


class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <HashRouter>
          <div>

            {router}

          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;