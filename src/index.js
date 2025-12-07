import React from "react";
import ReactDOM from "react-dom/client";
import "./components/App/App.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import ZvedennyaStore from "./components/ZvedennyaTable/Zvedennya.store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={ZvedennyaStore}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
