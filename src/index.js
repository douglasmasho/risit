import React from 'react';
import ReactDOM from 'react-dom';
import "./sass/main.scss";
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers";
import {BrowserRouter} from "react-router-dom";
import {persistStore} from "redux-persist"; ///allows the browser to cache
import {PersistGate} from "redux-persist/integration/react";
 
const store = createStore(rootReducer)
const persistor = persistStore(store);


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>   
      </BrowserRouter>
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);
