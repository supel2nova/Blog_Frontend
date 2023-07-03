import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Myroutes from "./Myroutes";
import MessengerCustomerChat from "react-messenger-customer-chat";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MessengerCustomerChat
      pageId="101439554570293"
      appId="195438366825122"
    />
    ,
    <Myroutes />
  </React.StrictMode>
);
