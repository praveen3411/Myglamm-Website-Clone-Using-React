import {
  FormControl,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ClosingToastExample from "../AllComponents/Tamasha";
let initail = {
  slect: "",
  numbers: "",
};
export default function BasicUsage() {
  const [userde, setUserde] = useState(initail);

  let boom = useNavigate(null);
  let savedetails = () => {
    boom("/user");
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <FaUserAlt onClick={onOpen} className="c2" />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>PLEASE PROVIDE THE VALID NUMBER 😊</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textAlign={"center"} fontWeight={"semibold"} color={"grey"}>
              Get 15% Good Point on every Order
            </Text>
            <br />
            <Image
              m={"auto"}
              width={"200px"}
              p={"10px"}
              src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg"
            />
            <br />
            <Text textAlign={"center"} fontWeight={"bold"}>
              MOBILE NUMBER
            </Text>
            <hr />
            <br />
            <HStack>
              <Select
                name="slect"
                value={userde.slect}
                onChange={(e) => e.target.value}
                w={"120px"}
                placeholder="+91"
                border="2px solid pink"
              >
                <option value="option1">+ 91</option>
              </Select>
              <FormControl isRequired>
                <Input
                  isrequired
                  value={userde.numbers}
                  textAlign={"center"}
                  border="2px solid pink"
                  type={"number"}
                  placeholder="Ener Your Number"
                  name="numbers"
                  onChange={(e) => setUserde(e.target.value)}
                  required
                />
              </FormControl>
            </HStack>
            <br />
            <Text textAlign={"center"} fontWeight={"bold"} fontSize={"12px"}>
              By Signing up you agree to our{" "}
              <Link to="/">Terms & Conditions</Link>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Link to={"/user"}>
              <ClosingToastExample
                onClick={savedetails}
                color="white"
                bgColor={"black"}
                variant="solid"
                width={"500px"}
              >
                CONTINUE
              </ClosingToastExample>
            </Link>
          </ModalFooter>
          <br />
        </ModalContent>
      </Modal>
    </>
  );
}
