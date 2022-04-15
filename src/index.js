import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello from webpack";

  return element;
}

document.body.appendChild(component());

ReactDOM.render(<App />, document.getElementById("root"));
