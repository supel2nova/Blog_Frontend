import React from "react";
import { MessengerChat } from "react-messenger-chat-plugin";
import { useLocation } from "react-router-dom";

const FacebookChat = () => {
  // const location = useLocation();
  // const hasExport = location.pathname.includes("/getblog");
  return (
    <>
      {/* {hasExport && (
       
      )} */}
       <MessengerChat
          pageId="101439554570293"
          language="th_TH"
          themeColor={"#ffb21d"}
          loggedInGreeting="ยินดีต้อนรับสู่เว็บ insKru ค่ะ พบปัญหาเว็บไซต์ติดต่อได้ทางช่องทางนี้เลยค่า :)"
          loggedOutGreeting="ยินดีต้อนรับสู่เว็บ insKru ค่ะ พบปัญหาเว็บไซต์ติดต่อได้ทางช่องทางนี้เลยค่า :)"
          greetingDialogDisplay={"show"}
        />
    </>
  );
};

export default FacebookChat;
