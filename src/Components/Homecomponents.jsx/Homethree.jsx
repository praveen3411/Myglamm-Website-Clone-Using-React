import { Box, Img, Text } from "@chakra-ui/react";
import "./com.css";
export default function Three({ src, name1, name2, width, height }) {
  return (
    <Box>
      <Box className="drop">
        <Text className="dropbtn">
          <Box w={370}>
            <Img src={src} width={width} height={height} />
          </Box>
        </Text> 
        <Box className="dropdown-conten">
          <Text id="tone">{name1}</Text>
          <Text id="ttwo">{name2}</Text>
        </Box>
      </Box>
    </Box>
  );
}
