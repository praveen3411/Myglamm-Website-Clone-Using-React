import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Offerspages({ src, name1, name2, name3 }) {
  return (
    <Box cursor={'pointer'}>
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={12}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="1000px"
          mx="auto"
          py={4}
          px={8}
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          shadow="lg"
          rounded="lg"
        >
          <Flex
            justifyContent={{
              base: "center",
              md: "end",
            }}
            mt={-16}
          >
            <Image
              w={20}
              h={20}
              fit="cover"
              rounded="full"
              borderStyle="solid"
              borderWidth={2}
              color="brand.500"
              _dark={{
                color: "brand.400",
              }}
              alt="Testimonial avatar"
              src={src}
            />
          </Flex>

          <Text
            color="gray.800"
            _dark={{
              color: "white",
            }}
            fontSize={{
              md: "22px",
            }}
            mt={{
              base: 2,
              md: 0,
            }}
            fontWeight="bold"
          >
            {name1}
          </Text>

          <Text
            mt={2}
            color="gray.600"
            _dark={{
              color: "gray.200",
            }}
          >
            {name2}
          </Text>

          <Flex justifyContent="end" mt={4}>
            <Link
              to={"/collection"}
              fontSize="xl"
              color="brand.500"
              _dark={{
                color: "brand.300",
              }}
            >
              <Button bg={"pink.300"}>{name3}</Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
