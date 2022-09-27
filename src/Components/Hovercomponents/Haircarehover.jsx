import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Helo from "./Helo";
import "./Nav.css";
export default function Haircarehover() {
  return (
    <div>
      <Flex justifyContent={"space-around"} p={1}>
        <Box
          textAlign={"start"}
          lineHeight={6}
          fontWeight={"semibold"}
          width={"210px"}
          marginLeft="10px"
        >
          <Text id="text-2">HAIRCARE</Text>
          <Text id="text-1">Shampoo</Text>
          <Text id="text-1">Conditioner</Text>
          <Text id="text-1">Hair Oil</Text>
          <Text id="text-1">Serum</Text>
          <Text id="text-1">Combos</Text>
          <Text id="text-1">Shampoo</Text>
          <Text id="text-1">Conditioner</Text>
          <Text id="text-1">Hair Oil</Text>
          <Text id="text-1">Serum</Text>
          <Text id="text-1">Combos</Text>
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/400x400/Artboard-1-(1).jpg"
            }
            name={"MyGlamm SUPERFOODS Onion..."}
            forr={"For Hair Fall Control"}
            ruppes="💰 269"
          />
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/400x400/Artboard-1-(1).jpg"
            }
            name={"MyGlamm SUPERFOODS Onion..."}
            forr={"For Hair Fall Control"}
            ruppes="💰 269"
          />
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/400x400/Artboard-1-(1).jpg"
            }
            name={"MyGlamm SUPERFOODS Onion..."}
            forr={"For Hair Fall Control"}
            ruppes="💰 269"
          />
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/400x400/Artboard-1-(1).jpg"
            }
            name={"MyGlamm SUPERFOODS Onion..."}
            forr={"For Hair Fall Control"}
            ruppes="💰 269"
          />
        </Box>
      </Flex>
    </div>
  );
}
