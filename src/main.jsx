import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Myroutes from "./Myroutes";
import { MessengerChat } from "react-messenger-chat-plugin";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MessengerChat
      pageId="101439554570293"
      language="th_TH"
      themeColor={"#ffb21d"}
      loggedInGreeting="ยินดีต้อนรับสู่เว็บ insKru ค่ะ พบปัญหาเว็บไซต์ติดต่อได้ทางช่องทางนี้เลยค่า :)"
      loggedOutGreeting="ยินดีต้อนรับสู่เว็บ insKru ค่ะ พบปัญหาเว็บไซต์ติดต่อได้ทางช่องทางนี้เลยค่า :)"
      greetingDialogDisplay={"show"}
      autoExpand={true}
      debugMode={false}
      onMessengerShow={() => {
        console.log("onMessengerShow");
      }}
      onMessengerHide={() => {
        console.log("onMessengerHide");
      }}
      onMessengerDialogShow={() => {
        console.log("onMessengerDialogShow");
      }}
      onMessengerDialogHide={() => {
        console.log("onMessengerDialogHide");
      }}
    />
    <Myroutes />
  </React.StrictMode>
);
