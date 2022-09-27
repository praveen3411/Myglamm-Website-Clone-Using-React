import { Box, Button, Flex, HStack, Img, Input, Text } from "@chakra-ui/react";
import "./com.css";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
export default function Footer() {
  return (
    <Box cursor={"pointer"}>
      <HStack
        fontSize={"16px"}
        spacing={47}
        fontWeight={"medium"}
        textAlign={"start"}
      >
        <Box>
          <Text id="ro1">Lips</Text>
          <Text id="ro">Lipstick</Text>
          <Text id="ro">MatteStick</Text>
          <Text id="ro">ShineStick</Text>
          <Text id="ro">LiquidStick</Text>
          <Text id="ro">LipGloss</Text>
          <Text id="ro">Hi-Shine</Text>
          <Text id="ro">LipGloss</Text>
          <Text id="ro">Liner</Text>
          <Text id="ro">GlossLip</Text>
          <Text id="ro">Shine</Text>
          <Text id="ro">Lip</Text>
        </Box>
        <Box>
          <Text id="ro1">Face</Text>
          <Text id="ro">Face Sets</Text>
          <Text id="ro">Fixing</Text>
          <Text id="ro">Powder</Text>
          <Text id="ro">Primer</Text>
          <Text id="ro">Concealer</Text>
          <Text id="ro">Foundation</Text>
          <Text id="ro">Banana</Text>
          <Text id="ro">Powder</Text>
          <Text id="ro">Hilighter</Text>
          <Text id="ro">Blush</Text>
          <Text id="ro">Bronzer</Text>
        </Box>
        <Box>
          <Text id="ro1">Eyes</Text>
          <Text id="ro">Eye</Text>
          <Text id="ro">Shadow</Text>
          <Text id="ro">Eyeliner</Text>
          <Text id="ro">Eyebrows</Text>
          <Text id="ro">Glitter</Text>
          <Text id="ro">Mascare</Text>
          <Text id="ro">Kajal</Text>
          <Text id="ro">Eyeshadwo</Text>
          <Text id="ro">Brushes</Text>
          <Text id="ro">Eye</Text>
          <Text id="ro">Combos</Text>
        </Box>
        <Box>
          <Text id="ro1">Nails</Text>
          <Text id="ro">Nail</Text>
          <Text id="ro">Polish</Text>
          <Text id="ro">Matte</Text>
          <Text id="ro">Nail</Text>
          <Text id="ro">Polish</Text>
          <Text id="ro">Nail</Text>
          <Text id="ro">Banana</Text>
          <Text id="ro">Lacquer</Text>
          <Text id="ro">Matte</Text>
          <Text id="ro">Nails</Text>
          <Text id="ro">Lacqure</Text>
        </Box>
        <Box>
          <Text id="ro1">SkinCare</Text>
          <Text id="ro">Moisturiser</Text>
          <Text id="ro">Night</Text>
          <Text id="ro">Cream</Text>
          <Text id="ro">Eye Cream</Text>
          <Text id="ro">Body Lotion</Text>
          <Text id="ro">Serum</Text>
          <Text id="ro">Sunscreen</Text>
          <Text id="ro">SkinCare</Text>
          <Text id="ro">Kits</Text>
          <Text id="ro">Cleaning</Text>
          <Text id="ro">Products</Text>
        </Box>
        <Box>
          <Text id="ro1">Sanitizing</Text>
          <Text id="ro">Care</Text>
          <Text id="ro">Wipes</Text>
          <Text id="ro">santiz</Text>
          <Text id="ro">Kits</Text>
          <Text id="ro">Hand</Text>
          <Text id="ro">Power</Text>
          <Text id="ro">Liquid</Text>
          <Text id="ro">Powder Hand</Text>
          <Text id="ro">Wipes</Text>
          <Text id="ro">Spray</Text>
          <Text id="ro">Home Sant</Text>
        </Box>
        <Box>
          <Text id="ro1">Body</Text>
          <Text id="ro">Shower</Text>
          <Text id="ro">Gles</Text>
          <Text id="ro">Soaps</Text>
          <Text id="ro">Body Spray</Text>
          <Text id="ro">Lotion</Text>
          <Text id="ro">Body Mists</Text>
          <Text id="ro">Hand Wash</Text>
          <Text id="ro">Shower</Text>
          <Text id="ro">Soaps</Text>
          <Text id="ro">Footcare</Text>
          <Text id="ro">Creams</Text>
        </Box>
        <Box>
          <Text id="ro1">Kits</Text>
          <Text id="ro">MakeUp</Text>
          <Text id="ro">Bridal</Text>
          <Text id="ro">MakeUp</Text>
          <Text id="ro">Kid Kit</Text>
          <Text id="ro">Combos</Text>
          <Text id="ro">Gift Sets</Text>
          <Text id="ro">Cosmetics</Text>
          <Text id="ro">Body Kits</Text>
          <Text id="ro">Spray Kits</Text>
          <Text id="ro">Lip Kit</Text>
          <Text id="ro">Hair Kit</Text>
        </Box>
        <Box>
          <Text id="ro1">Hair Care</Text>
          <Text id="ro">Shampoo</Text>
          <Text id="ro">Conditoner</Text>
          <Text id="ro">Hair Oil</Text>
          <Text id="ro">Massage Oil</Text>
          <Text id="ro">Serum</Text>
          <Text id="ro">Hair Mask</Text>
          <Text id="ro">Hair Kit</Text>
          <Text id="ro">Combos</Text>
          <Text id="ro">Conditoner</Text>
          <Text id="ro">Shampoo</Text>
          <Text id="ro">Message Kit</Text>
        </Box>
      </HStack>
      <br /> 
      <Flex>
        <Input
          borderRadius={"none"}
          border={"2px solid black"}
          borderColor={"black"}
          borderLeftRadius={"none"}
          w={300}
          type={"email"}
          placeholder={"Enter Your E-Mail"}
          htmlSize={5}
        />
        <Button color={"white"} bg={"black"} borderRadius={"none"}>
          SUBSCRIBE NOW
        </Button>
        <HStack spacing={4}>
          <Text fontSize={"20px"} fontWeight={"bold"} ml={5}>
            Stay Co |
          </Text>
          <Text>
            <AiOutlineInstagram id="ro2" />
          </Text>
          <Text>
            <FiTwitter id="ro3" />
          </Text>
          <Text>
            <FaPinterestP id="ro4" />
          </Text>
          <Text>
            <AiOutlineYoutube id="ro5" />
          </Text>
        </HStack>
        <HStack spacing={5} marginLeft={'200px'}>
          <a href="https://www.playstore.com">
            <Img
              width={"50px"}
              height={"50px"}
              src="https://cdn.icon-icons.com/icons2/3658/PNG/128/app_store_game_social_media_playstore_google_icon_228385.png"
            />
          </a>
          <a href="https://www.pintrest.com">
            <Img
              width={"40px"}
              height={"40px"}
              src="https://cdn.icon-icons.com/icons2/3658/PNG/512/communication_social_media_pintrest_icon_228387.png"
            />
          </a>
          <a href="https://www.twitter.com">
          <Img
            width={"40px"}
            height={"40px"}
            src="https://cdn.icon-icons.com/icons2/3658/PNG/512/communication_social_media_twitter_icon_228391.png"
          />
          </a>
        </HStack>
      </Flex>

      <Box>
        <Text color={"blackAlpha.500"} id="ro6">
          @Developed By Praveen Kumar Yadav @copyRight 2022
        </Text>
      </Box>
    </Box>
  );
}
