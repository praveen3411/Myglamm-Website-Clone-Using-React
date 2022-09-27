import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import LoginSuccess from "../AllComponents/Tamashaone";
import { FirstAuthContext } from "../Authentations/FirstAuth";
import FirstNavbar from "../Navbars/FirstNavbar";
import ThirdNavbar from "../Navbars/NavbarThird";
import SecondNavbar from "../Navbars/SecondNavbar";
import "./Mainpages.css";
import BasicUsage from "./Modal";
let initail = {
  email: "",
  password: "",
};
export default function User() {
  const auth = useContext(FirstAuthContext);
  const [dot, setData] = useState(initail);
  let take = useNavigate(null);
  let handling = (e) => {
    const { name, value } = e.target;
    setData({ ...dot, [name]: value });
  };
  let savingdata = (event) => {
    event.preventDefault();
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dot),
    })
      .then((res) => res.json())
      .then((res) => {
        auth.isLogin(res.token);
        take("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Box>
      <FirstNavbar />
      <SecondNavbar />
      <ThirdNavbar />
      <Box
        cursor={"pointer"}
        width={"700px"}
        margin={"auto"}
        boxShadow={
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
        }
        borderRadius="5px"
        padding={1}
      >
        <Text id="one">
          VERIFY YOUR MOBILE NUMBER TO COMPLETE YOUR REGISTRATION
        </Text>
        <br />
        <Text id="one">ENTER OTP SENT ON YOUR MOBILE NUMBER</Text>
        <br />
        <Center>
          <HStack>
            <PinInput
              focusBorderColor="pink.500"
              variant={"outline"}
              type="alphanumeric"
            >
              <PinInputField border={"2px solid black"} required />
              <PinInputField border={"2px solid black"} required />
              <PinInputField border={"2px solid black"} required />
              <PinInputField border={"2px solid black"} required />
            </PinInput>
          </HStack>
        </Center>
        <br />
        <Stack spacing={5}>
          <Box>
            <Text>
              <Center gap={2}>
                <RiMailSendLine /> <span id="one">RESEND OTP</span>
              </Center>
            </Text>
          </Box>
          <Center>
            <Text id="one" className="hel">
              LOGIN HERE
            </Text>
          </Center>
        </Stack>
        <Box>
          <FormControl isRequired>
            <Input
              textAlign={"center"}
              fontFamily={"sans-serif"}
              width={500}
              m={"auto"}
              border={"2px solid black"}
              name="email"
              value={dot.email}
              placeholder={"* ENTER YOUR EMAIL CREDIENTIALS"}
              onChange={handling}
              required
            />
            <br />
            <br />
            <Input
              textAlign={"center"}
              fontFamily={"sans-serif"}
              width={500}
              m={"auto"}
              border={"2px solid black"}
              name="password"
              value={dot.password}
              onChange={handling}
              placeholder={"* ENTER YOUR PASSWORD CREDIENTIALS"}
              required
            />
            <br />
            <br />
            <Button
              width={500}
              bgColor={"black"}
              color={"white"}
              onClick={savingdata}
              fontWeight={"bold"}
              _hover={{ bg: "pink", color: "black" }}
            >
              <LoginSuccess />
            </Button>
          </FormControl>
        </Box>
        <HStack spacing={5} ml={"200px"} mt={3} mb={5}>
          <Text fontWeight={"bold"}>Are You Fresh ? Create Account</Text>
          <Text fontSize={"30px"} colorScheme={"green"}>
            <BasicUsage />{" "}
          </Text>
        </HStack>
      </Box>
    </Box>
  );
}
