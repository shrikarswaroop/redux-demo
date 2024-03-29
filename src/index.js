import React from "react";
import { createRoot } from "react-dom/client";
// import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";
import App from "./App";
import rootReducer from "./slices";
import "./index.css";

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({ reducer: rootReducer });

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
