import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Myroutes from "./Myroutes";
import { MessengerChat } from "react-messenger-chat-plugin";
const pageId = import.meta.env.FACEBOOK_CHAT;

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <MessengerChat
      pageId={pageId}
      language="th_TH"
      themeColor={"#ffb21d"}
      loggedInGreeting="ยินดีต้อนรับสู่เว็บ insKru ค่ะ พบปัญหาเว็บไซต์ติดต่อได้ทางช่องทางนี้เลยค่า :)"
      loggedOutGreeting="ยินดีต้อนรับสู่เว็บ insKru ค่ะ พบปัญหาเว็บไซต์ติดต่อได้ทางช่องทางนี้เลยค่า :)"
      greetingDialogDisplay={"show"}
    />
    <Myroutes />
  </React.StrictMode>
);
