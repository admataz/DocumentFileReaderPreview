import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import DataUploader from "./DataUploader";

function App() {
  return <DataUploader />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
