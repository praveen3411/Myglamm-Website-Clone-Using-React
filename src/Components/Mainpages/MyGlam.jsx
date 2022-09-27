import { Box, HStack, Img, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Homecomponents.jsx/Footer";
import Two from "../Homecomponents.jsx/Hometwo";
import FirstNavbar from "../Navbars/FirstNavbar";
import ThirdNavbar from "../Navbars/NavbarThird";
import SecondNavbar from "../Navbars/SecondNavbar";

export default function MyGlam() {
  return (
    <Box>
      <FirstNavbar />
      <SecondNavbar />
      <ThirdNavbar />
      <br />
      <Box width={"86%"} m="auto">
        <Box>
          <Two names={"BEAUTYES"} />
        </Box>
        <br />
        <Box>
          <HStack spacing={"10px"}>
            <Box>
              <Img
                width={"360px"}
                src="https://files.myglamm.com/site-images/768x432/cleansers-for-oily-skin.jpg"
                boxShadow={"1px 1px 2px black"}
                borderRadius={"5px"}
              />
              <br />
              <Text fontWeight={"bold"} fontFamily={"sans-serif"}>
                10 Face cleaners for only skin
              </Text>
            </Box>
            <Box>
              <Img
                width={"360px"}
                src="https://files.myglamm.com/site-images/768x432/Untitled-design-(69).png"
                boxShadow={"1px 1px 2px black"}
                borderRadius={"5px"}
              />
              <br />
              <Text fontWeight={"bold"} fontFamily={"sans-serif"}>
                All the benifits of charcoal soap
              </Text>
            </Box>
            <Box>
              <Img
                width={"360px"}
                src={
                  "https://files.myglamm.com/site-images/768x432/best-homemade-face-cleanser.jpg"
                }
                boxShadow={"1px 1px 2px black"}
                borderRadius={"5px"}
              />
              <br />
              <Text fontWeight={"bold"} fontFamily={"sans-serif"}>
                Home made face cleaners that rival
              </Text>
            </Box>
          </HStack>
          <br />
          <br />
          <Box>
            <Two names={"TRENDS"} />
          </Box>
          <br />
          <HStack spacing={"10px"}>
            <Box>
              <Img
                width={"360px"}
                src={
                  "https://files.myglamm.com/site-images/768x432/Untitled-design-(71).png"
                }
                boxShadow={"1px 1px 2px black"}
                borderRadius={"5px"}
              />
              <br />
              <Text fontWeight={"bold"} fontFamily={"sans-serif"}>
                How to perfect arinia signature eye
              </Text>
            </Box>
            <Box>
              <Img
                width={"360px"}
                src={
                  "https://files.myglamm.com/site-images/768x432/Untitled-design-(63).png"
                }
                boxShadow={"1px 1px 2px black"}
                borderRadius={"5px"}
              />
              <br />
              <Text fontWeight={"bold"} fontFamily={"sans-serif"}>
                Makeup for facemasks
              </Text>
            </Box>
            <Box>
              <Img
                width={"360px"}
                src={
                  "https://files.myglamm.com/site-images/768x432/Untitled-design-(49)_1.png"
                }
                boxShadow={"1px 1px 2px black"}
                borderRadius={"5px"}
              />
              <br />
              <Text fontWeight={"bold"} fontFamily={"sans-serif"}>
                Tik Tok makeup trends
              </Text>
            </Box>
          </HStack>
          <br />
          <br />
          <Box>
            <Two names={"STYLE"} />
          </Box>
          <br />
          <HStack spacing={"10px"}>
            <Box>
              <Img
                width={"360px"}
                src={
                  "https://files.myglamm.com/site-images/768x432/Untitled-design-(53)_1.png"
                }
                boxShadow={"1px 1px 2px black"}
                borderRadius={"5px"}
              />
              <br />
              <Text fontWeight={"bold"} fontFamily={"sans-serif"}>
                Best Buaty tips and secrects
              </Text>
            </Box>
            <Box>
              <Img
                width={"360px"}
                src="https://files.myglamm.com/site-images/768x432/Untitled-design-(50)_2.png"
                boxShadow={"1px 1px 2px black"}
                borderRadius={"5px"}
              />
              <br />
              <Text fontWeight={"bold"} fontFamily={"sans-serif"}>
                From video dates to zoom mettings
              </Text>
            </Box>
            <Box>
              <Img
                width={"360px"}
                src={
                  "https://files.myglamm.com/site-images/768x432/Untitled-design-(73).png"
                }
                boxShadow={"1px 1px 2px black"}
                borderRadius={"5px"}
              />
              <br />
              <Text fontWeight={"bold"} fontFamily={"sans-serif"}>
                look your best this valentery's day
              </Text>
            </Box>
          </HStack>
        </Box>
        <br />
        <hr />
      </Box>
      <br />
      <Box width={'89%'} m={'auto'}>
        <Footer/>
      </Box>
    </Box>
  );
}
