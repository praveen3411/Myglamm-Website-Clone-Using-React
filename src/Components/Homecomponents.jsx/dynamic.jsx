import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Footer from "./Footer";
export default function Dynamic({
  src,
  name1,
  name2,
  rating,
  ratings,
  cost,
  onClick,
}) {
  return (
    <Box>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
      >
        <Flex bg="brand.400">
          <Image
            src={src}
            alt="3 women looking at a laptop"
            ml={10}
            mt="40px"
            borderRadius={10}
            h={"450px"}
            w="full"
            bg="gray.100"
            loading="lazy"
          />
        </Flex>
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          px={{
            base: 4,
            md: 8,
            lg: 20,
          }}
          py={24}
          zIndex={3}
        >
          <Text
            color="brand.600"
            _dark={{
              color: "gray.300",
            }}
            fontSize="lg"
            textTransform="uppercase"
            fontWeight="extrabold"
          >
            {name1}
          </Text>
          <br />
          <Text mb={4} fontWeight="semibold" color="grey">
            {name2}
          </Text>
          <HStack fontSize={"18px"} fontWeight={"bold"}>
            <Text>{rating}</Text>
            <Text fontSize={"22px"} color={"pink.400"}>
              <AiFillStar />
            </Text>
            <Text>|</Text>
            <Text>{ratings}</Text>
          </HStack>
          <br />
          <Text fontSize={"20px"} fontWeight={"bold"}>
            ₹ {cost}
          </Text>
          <br />
          <Text fontSize={"sm"}>(MRP incl. of all taxes)</Text>
          <br />
          <Box>
            <Link to={"/bag"}>
              <Button
                padding={5}
                bg={"black"}
                color={"white"}
                width={"250px"}
                borderRadius="2px"
                leftIcon={<FaShoppingBag />}
                _hover={{ bg: "pink", color: "black" }}
                onClick={onClick}
              >
                ADD TO BAG
              </Button>
            </Link>
          </Box>
          <br />
          <Box p={1} borderRadius={5} bg={"gray.100"}>
            <Text fontWeight={"semibold"}>
              You will receive cashback worth ₹99 as myglammPOINTS
            </Text>
          </Box>
        </Flex>
      </SimpleGrid>
      <hr color="pink" />
      <br />
      <Box width={"89%"} m={"auto"}>
        <Footer />
      </Box>
    </Box>
  );
}
