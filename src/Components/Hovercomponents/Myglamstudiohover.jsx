import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Helo from "./Helo";
import "./Nav.css";
export default function MyGlamStudio() {
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
          <Text id="text-2">GLAMMOR</Text>
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
              "https://files.myglamm.com/site-images/768x432/Untitled-design-(63).png"
            }
            name={"Manish Malhotra 9"}
            forr={"Perfect Americian Winner"}
            ruppes="💰 Ultimate"
          />
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/768x432/Untitled-design-(50)_2.png"
            }
            name={"Glow To Glamour Shimmer"}
            forr={"Perfect Indian Winner"}
            ruppes="💰 Ultimate"
          />
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/768x432/red-bridal-nail-art.jpg"
            }
            name={"Orange Shield"}
            forr={"Precision Perfect Matte"}
            ruppes="💰 Ultimate"
          />
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/768x432/Untitled-design-(71).png"
            }
            name={"Makeup Kit for girls"}
            forr={"2 in one kits"}
            ruppes="💰 Ultimate"
          />
        </Box>
      </Flex>
    </div>
  );
}
