import { Box, Image, Text } from "@chakra-ui/react";

export default function Helo({ source, name, forr, ruppes }) {
  return (
    <div>
      <Box
        flexDir={"column"}
        gap="10px"
        boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px;"}
        padding={2}
        borderRadius="5px"
      >
        <Image w={"200px"} height={"200px"} alt="images" src={source} />
        <Text>{name}</Text>
        <Text>{forr}</Text>
        <Text>{ruppes}</Text>
      </Box>
    </div>
  );
}
