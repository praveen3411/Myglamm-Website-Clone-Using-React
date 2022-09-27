import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Helo from "./Helo";
import "./Nav.css";
export default function Sanitizingcare() {
  return (
    <div>
      <Flex justifyContent={"space-around"} p={1}>
        <Box
          textAlign={"start"}
          lineHeight={6}
          fontWeight={"semibold"}
          width={"210px"}
          ml='20px'
        >
          <Text id="text-2">SANITIZING CARE</Text>
          <Text id="text-1">Sanitizing Wipes</Text>
          <Text id="text-1">Hand Sanitizer</Text>
          <Text id="text-1">Shower Gel</Text>
          <Text id="text-1">Body Moisturizer</Text>
          <Text id="text-1">Soaps</Text>
          <Text id="text-1">Hand Care</Text>
          <Text id="text-1">Foot Care</Text>
          <Text id="text-1">Surface Spray</Text>
          <Text id="text-1">Body Spray</Text>
          <Text id="text-1">Fragrance</Text>
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/400x400/Game-over-Germs_2.jpg"
            }
            name={"Game Over Germs..."}
            forr={"Sanitizing wipers for world"}
            ruppes="💰 229"
          />
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/400x400/ULTIMATE-GERM-DEFENCE_5.jpg"
            }
            name={"Ultimate Germ Defence"}
            forr={"45 Sanitizing wipers"}
            ruppes="💰 731"
          />
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/400x400/Germ-Shield_2.jpg"
            }
            name={"Germ Shield"}
            forr={"35 Sanitizing wipers"}
            ruppes="💰 299"
          />
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/400x400/Germ-Shield_2.jpg"
            }
            name={"Hand Shield"}
            forr={"35 Sanitizing wipers"}
            ruppes="💰 599"
          />
        </Box>
      </Flex>
    </div>
  );
}
