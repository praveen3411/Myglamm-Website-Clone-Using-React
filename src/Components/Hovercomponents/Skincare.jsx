import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Helo from "./Helo";

export default function Skincare() {
  return (
    <div>
      <Flex justifyContent={"space-around"} p={1}>
        <Box
          textAlign={"start"}
          lineHeight={6}
          fontWeight={"semibold"}
          width={"200px"}
          ml={"50px"}
        >
          <Text id="text-2">SKINCARE</Text>
          <Text id="text-1">Mostiurizer</Text>
          <Text id="text-1">Eye Cream</Text>
          <Text id="text-1">Body Lotion</Text>
          <Text id="text-1">Sunscreen</Text>
          <Text id="text-1">Skincare Kits</Text>
          <br />
          <Text id="text-2">CLENSING PRODUCTS</Text>
          <Text id="text-1">Cleanser</Text>
          <Text id="text-1">Face Wash</Text>
          <Text id="text-1">Exfoliator & Scrub</Text>
          <Text id="text-1">Exfoliator & Scrub</Text>
        </Box>

        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/800x800/17-Amla-Moisturising-Gel-Post-1-01.jpg"
            }
            name={"MyGlamm SUPERFOODS Onion..."}
            forr={"For Hair Fall Control"}
            ruppes="💰 200"
          />
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/800x800/Blueberry---Kakadu-Plum-Sleeping-Mask-1_1.jpg"
            }
            name={"MyGlamm SUPERFOODS Onion..."}
            forr={"For Hair Fall Control"}
            ruppes="💰 289"
          />
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/800x800/GGL1-(4)_1.png"
            }
            name={"MyGlamm SUPERFOODS Onion..."}
            forr={"For Hair Fall Control"}
            ruppes="💰 369"
          />
        </Box>
        <Box>
          <Helo
            source={"https://files.myglamm.com/site-images/800x800/SF5_1.png"}
            name={"MyGlamm SUPERFOODS Onion..."}
            forr={"For Hair Fall Control"}
            ruppes="💰 369"
          />
        </Box>
      </Flex>
    </div>
  );
}
