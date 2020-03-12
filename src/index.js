import React from "react";
import ReactDOM from "react-dom";

import Store from "./context/store";

import App from "./App";

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById("root")
);
