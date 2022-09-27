import { Box, Text } from "@chakra-ui/react";
import "./com.css";
export default function Two({ names }) {
  return (
    <div>
      <Box id="box1" cursor={"pointer"}>
        <Text id="textone">{names}</Text>
      </Box>
    </div>
  );
}
