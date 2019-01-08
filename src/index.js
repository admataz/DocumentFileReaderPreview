import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import FileInputReader from "./FileInputReader";

function App() {
  return <FileInputReader  />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
