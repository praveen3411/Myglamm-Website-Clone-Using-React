import { Box, Center, Img, Text } from "@chakra-ui/react";
import "./com.css";
export default function HomeF({ src, name }) {
  return (
    <Box>
      <Box id="round1">
        <Img id="round2" src={src} />
        <br />
        <Center>
          <Text id="round3">{name}</Text>
        </Center>
      </Box>
    </Box>
  );
}
