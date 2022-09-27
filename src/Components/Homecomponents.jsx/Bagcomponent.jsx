import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

export default function ProductSimple({
  src,
  name1,
  name2,
  name3,
  name4,
  onClick,
}) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"205px"}
          borderRadius="10px"
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(5px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={src}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text
            fontWeight={"bold"}
            color={"gray.500"}
            fontSize={"sm"}
            textTransform={"uppercase"}
          >
            {name1}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {name2} ⭐
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ${name3}
            </Text>
            <Text color={"gray.600"}>💫{name4}</Text>
            <br />
          </Stack>
        </Stack>
        <Button
          fontWeight={"bold"}
          bgColor={"black"}
          color={"white"}
          mt={"5px"}
          onClick={onClick}
        >
          BUY-NOW
        </Button>
      </Box>
    </Center>
  );
}
