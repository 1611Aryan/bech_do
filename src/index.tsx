import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import GlobalStyle from "./GlobalStyle"

import store from "./Redux/store"
import { Provider } from "react-redux"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
