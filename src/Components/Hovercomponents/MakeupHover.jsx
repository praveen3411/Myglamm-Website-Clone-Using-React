import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import "./Nav.css";
export default function MakeupHover() {
  return (
    <div>
      <Flex justifyContent={"space-around"} p={1}>
        <Box textAlign={"start"} lineHeight={6} fontWeight={"semibold"}>
          <Text id="text-2">LIPS</Text>
          <Text id="text-1">LipStick</Text>
          <Text id="text-1">Liquid LipStick</Text>
          <Text id="text-1">Hi-Shine LipStick</Text>
          <Text id="text-1">Matte LipStick</Text>
          <Text id="text-1">Lip Gloss</Text>
          <Text id="text-1">Lip Gloss</Text>
          <Text id="text-1">Lip Liner</Text>
          <Text id="text-1">Lip Balm</Text>
          <Text id="text-1">Lip Glitter</Text>
          <Text id="text-1">Lip Stain</Text>
          <Text id="text-1">LipStick Set</Text>
          <Text id="text-1">Lip Kit</Text>
          <Text id="text-1">Find Your LipStick</Text>
        </Box>
        <Box textAlign={"start"} lineHeight={6} fontWeight={"semibold"}>
          <Text id="text-2">FACE</Text>
          <Text id="text-1">Fixing Powder</Text>
          <Text id="text-1">Primer</Text>
          <Text id="text-1">Concealer</Text>
          <Text id="text-1">Foundation</Text>
          <Text id="text-1">Compact Powder</Text>
          <Text id="text-1">Setting Powder</Text>
          <Text id="text-1">Banana Powder</Text>
          <Text id="text-1">Sindoor</Text>
          <Text id="text-1">Hignlighter</Text>
          <Text id="text-1">Blush</Text>
          <Text id="text-1">Bronzer</Text>
          <Text id="text-1">Cheek Stain</Text>
          <Text id="text-1">Primer</Text>
        </Box>
        <Box textAlign={"start"} lineHeight={6} fontWeight={"semibold"}>
          <Text id="text-2">EYES</Text>
          <Text id="text-1">Eye Shadow</Text>
          <Text id="text-1">Eyeliner</Text>
          <Text id="text-1">Eyebrows</Text>
          <Text id="text-1">Glitter</Text>
          <Text id="text-1">Mascara</Text>
          <Text id="text-1">Kajal</Text>
          <Text id="text-1">Eye Combos</Text>
          <Text id="text-1">Eyeliner</Text>
          <Text id="text-1">Eyebrows</Text>
          <Text id="text-1">Glitter</Text>
          <Text id="text-1">Mascara</Text>
          <Text id="text-1">Eyeliner</Text>
          <Text id="text-1">Eyebrows</Text>
        </Box>
        <Box textAlign={"start"} lineHeight={6} fontWeight={"semibold"}>
          <Text id="text-2">NAILS</Text>
          <Text id="text-1">Nail Lacquer</Text>
          <Text id="text-1">Nail Polish</Text>
          <Text id="text-1">Nail Lacquer</Text>
          <Text id="text-1">Matte Nail Polish</Text>
          <Text id="text-2">KITS AND COMBOS</Text>
          <Text id="text-1">Makeup Kits</Text>
          <Text id="text-1">Bridal Makeup Kits</Text>
          <Text id="text-1">Bridal Makeup Kits</Text>
          <Text id="text-2">Makeup Gift Sets</Text>
          <Text id="text-1">MAKEUP ACCESSORIES</Text>
          <Text id="text-1">Makeup Brushes</Text>
          <Text id="text-1">Eyeshadow Brushes</Text>
          <Text id="text-1">Makeup Brushes</Text>
        </Box>
      </Flex>
    </div>
  );
}
