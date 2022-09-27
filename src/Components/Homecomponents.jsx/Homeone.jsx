import { Box, Img } from "@chakra-ui/react";
import React from "react";

export default function One({ src }) {
  return (
    <Box>
      <Box width={"89%"} margin={"auto"} cursor={'pointer'}>
        <Img src={src} alt="Home-Page_images" />
      </Box>
    </Box>
  );
}
