import { Box, Circle } from "@chakra-ui/react";
import { useContext } from "react";
import { FirstAuthContext } from "../Authentations/FirstAuth";
import { BsArrowUpCircleFill } from "react-icons/bs";
import "./com.css";
export default function Scrool() {
  const { isfocus } = useContext(FirstAuthContext);
  return (
    <Box onClick={isfocus} position={"fixed"} top={"515px"} ml={"10px"}>
      <Circle bg={"pink"} padding="16px" id="r">
        <BsArrowUpCircleFill
          style={{ fontSize: "20px", fontWeight: "bolder" }}
        />
      </Circle>
    </Box>
  );
}
