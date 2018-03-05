import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { userReducers } from 'store/reducers';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer } from 'react-router-redux'


// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    userReducers,
    routing: routerReducer
    }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const AppProvider = () => (
    <Provider store={store}>
      <App />
    </Provider>
);

ReactDOM.render(<AppProvider />, document.getElementById('root'));
registerServiceWorker();
