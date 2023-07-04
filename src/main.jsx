import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Myroutes from "./Myroutes";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { MessengerChat } from "react-messenger-chat-plugin";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MessengerChat
      pageId="1652647158184149"
      language="th_TH"
      loggedInGreeting="ยินดีต้อนรับสู่เว็บ insKru ค่ะ พบปัญหาเว็บไซต์ติดต่อได้ทางช่องทางนี้เลยค่า :)"
      loggedOutGreeting="ยินดีต้อนรับสู่เว็บ insKru ค่ะ พบปัญหาเว็บไซต์ติดต่อได้ทางช่องทางนี้เลยค่า :)"
      greetingDialogDisplay={"show"}
    />
    <Myroutes />
  </React.StrictMode>
);
