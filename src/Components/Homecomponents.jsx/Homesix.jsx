import { Box, Img, Stack, Text } from "@chakra-ui/react";

export default function Homesix({ src, name1, name2 }) {
  return (
    <Box cursor={"pointer"}>
      <Box
        width={"370px"}
        boxShadow={
          " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
        }
      >
        <Img src={src} />
        <Stack spacing={5}>
          <Text
            mt={5}
            fontFamily={"sans-serif"}
            fontSize={"18px"}
            fontWeight={"bold"}
          >
            {name1}
          </Text>
          <Text
            fontFamily={"sans-serif"}
            fontSize={"15px"}
            fontWeight={"semibold"}
          >
            {name2}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}
