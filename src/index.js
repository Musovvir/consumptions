import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./redux/configureStore";
import { Provider } from "react-redux";
import "material-design-icons/iconfont/material-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import "react-twemoji-picker"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
