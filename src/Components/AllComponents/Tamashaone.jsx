import { Button, useToast, Wrap } from "@chakra-ui/react";
import { useRef } from "react";

export default function LoginSuccess() {
  const toast = useToast();
  const toastIdRef = useRef();
  function addToast() {
    toastIdRef.current = toast({
      description: "THANK YOU 💝 LOGIN SUCCESSFULL ",
    });
  }
  return (
    <Wrap>
      <Button
        bg={"black"}
        color={"white"}
        _hover={{ color: "black", bg: "pink" }}
        width={"600px"}
        onClick={addToast}
        type="button"
        fontWeight={"bold"}
      >
        LOGIN HERE
      </Button>
    </Wrap>
  );
}
