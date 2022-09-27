import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Helo from "./Helo";
import "./Nav.css";
export default function OffersHover() {
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
          <Text id="text-2">OFFERS</Text>
          <Text id="text-1">MyGlamm Offers</Text>
          <Text id="text-1">SUPERFOODS Offers</Text>
          <Text id="text-1">Treat Offers</Text>
          <Text id="text-1">Clean Offers</Text>
          <Text id="text-1">POPxo Offers</Text>
          <Text id="text-1">WIPEOUT Offers</Text>
          <Text id="text-1">GLOW Offers</Text>
          <Text id="text-1">Manish Offers</Text>
          <Text id="text-1">Youth Offers</Text>
          <Text id="text-1">Lit Offers</Text>
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/original/IDFC-offer-banner-660x330_3.jpg"
            }
            name={"Manish Malhotra 9"}
            forr={"Full of discounts"}
            ruppes="💰 20% off"
          />
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/768x432/simpl-offer-banner-660x330_6.jpg"
            }
            name={"Glow To Glamour Shimmer"}
            forr={"Full of discounts"}
            ruppes="💰 100% off"
          />
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/original/mobikwik-offer-banner-660x330_5.jpg"
            }
            name={"Germ Shield"}
            forr={"Full of discounts"}
            ruppes="💰 150% off"
          />
        </Box>
        <Box>
          <Helo
            source={
              "https://files.myglamm.com/site-images/original/IDFC-offer-banner-660x330_4.jpg"
            }
            name={"Makeup Kit for girls"}
            forr={"Full of discounts"}
            ruppes="💰 10% off"
          />
        </Box>
      </Flex>
    </div>
  );
}
