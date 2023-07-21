import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Myroutes from "./Myroutes";
import FacebookChat from "./FacebookChat";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FacebookChat />
    <Myroutes />
  </React.StrictMode>
);
