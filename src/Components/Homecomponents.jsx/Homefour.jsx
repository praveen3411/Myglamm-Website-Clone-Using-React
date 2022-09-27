import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Center, Flex, HStack, Img, Stack, Text } from "@chakra-ui/react";
import { AiTwotoneStar } from "react-icons/ai";
import { GiVibratingShield } from "react-icons/gi";
export default function Homefour() {
  const [boom, setBoom] = useState([]);
  let functionone = ({ boom }) => {
    axios
      .get("http://localhost:5000/api/bestsellers")
      .then((result) => {
        setBoom(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    functionone({});
  }, []);
  return (
    <Box>
      <Box width={"89%"} m={"auto"}>
        <Flex>
          <HStack spacing={3}>
            {boom.map((item) => (
              <Box
                borderRadius={"3px"}
                boxShadow={
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;"
                }
                key={item.img}
              >
                <Img
                  src={item.img}
                  borderRadius={"3px"}
                  _hover={{ margin: "-5px" }}
                />
                <Stack>
                  <Text
                    fontWeight={"bold"}
                    fontFamily={"sans-serif"}
                    textTransform={"capitalize"}
                  >
                    {item.name}
                  </Text>
                  <Text fontWeight={"semibold"} color={"grey"}>
                    {item.subname}
                  </Text>
                </Stack>
                <br />
                <Center>
                  <HStack>
                    <Text fontWeight={"bold"} fontFamily={"sans-serif"}>
                      {item.rating}
                    </Text>
                    <Text>
                      <AiTwotoneStar color="#ff9797" fontSize={"20px"} />
                    </Text>
                    <Text fontWeight={"bold"} fontFamily={"sans-serif"}>
                      {item.ratings}
                    </Text>
                    <Text>
                      <GiVibratingShield color="#ff9797" fontSize={"20px"} />
                    </Text>
                  </HStack>
                </Center>
                <br />

                <Center>
                  <HStack>
                    <Text fontWeight={"bold"} fontFamily={"sans-serif"}>
                      ₹ {item.cost}
                    </Text>
                  </HStack>
                </Center>
              </Box>
            ))}
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
