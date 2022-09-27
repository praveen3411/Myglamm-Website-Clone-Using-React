import { Box, Circle } from "@chakra-ui/react";
import { useContext } from "react";
import { FirstAuthContext } from "../Authentations/FirstAuth";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import "./com.css";
import BasicUsage from "../Mainpages/Modal";
export default function Chatting() {
  let chatapplication = () => {
    alert('Chat is disabled')
  };
  return (
    <Box
      onClick={chatapplication}
      position={"fixed"}
      top={"515px"}
      mr={"8px"}
      right={"0.5"}
    >
      <Circle bgColor={"green.300"} padding="16px" id="r">
        <BsFillChatRightDotsFill
          style={{ fontSize: "20px", fontWeight: "bolder" }}
        />
      </Circle>
    </Box>
  );
}
