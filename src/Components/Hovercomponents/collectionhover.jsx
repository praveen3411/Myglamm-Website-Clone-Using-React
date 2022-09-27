import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Helo from "./Helo";
import "./Nav.css";
export default function ColletionHover() {
  return (
    <div>
      <Flex justifyContent={"space-around"} p={1}>
        <Box
          textAlign={"start"}
          lineHeight={6}
          fontWeight={"semibold"}
          width={"210px"}
          ml="20px"
        >
          <Text id="text-2">SHOP BY COLLECTION</Text>
          <Text id="text-1">MyGlamm</Text>
          <Text id="text-1">SUPERFOODS</Text>
          <Text id="text-1">Treat Love Care</Text>
          <Text id="text-1">Clean Beauty</Text>
          <Text id="text-1">POPxo</Text>
          <Text id="text-1">WIPEOUT</Text>
          <Text id="text-1">GLOW Iridescent</Text>
          <Text id="text-1">Manish Malhotra</Text>
          <Text id="text-1">Youth Full</Text>
          <Text id="text-1">Lit Collection</Text>
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/400x400/Game-over-Germs_2.jpg"
            }
            name={"Manish Malhotra 9"}
            forr={"Compact EyeShadow Palette"}
            ruppes="💰 1229"
          />
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/400x400/Soiree-(1).jpg"
            }
            name={"Glow To Glamour Shimmer"}
            forr={"2 in Shimmer and Fixing"}
            ruppes="💰 831"
          />
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/400x400/Tom-Collins_6.jpg"
            }
            name={"Germ Shield"}
            forr={"Precision Perfect Matte"}
            ruppes="💰 389"
          />
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/800x800/Soiree-(3).jpg"
            }
            name={"Makeup Kit for girls"}
            forr={"2 in one kits"}
            ruppes="💰 999"
          />
        </Box>
      </Flex>
    </div>
  );
}
