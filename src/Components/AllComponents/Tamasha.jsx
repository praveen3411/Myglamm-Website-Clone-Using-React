import { Button, useToast, Wrap } from "@chakra-ui/react";
import { useRef } from "react";

export default function ClosingToastExample() {
  const toast = useToast();
  const toastIdRef = useRef();
  function addToast() {
    toastIdRef.current = toast({
      description: "ENTER YOU OTP SENT TO YOUR MOBILE NUMBER",
    });
  }
  return (
    <Wrap>
      <Button
        bg={"black"}
        color={"white"}
        _hover={{ color: "black", bg: "pink" }}
        width={"400px"}
        onClick={addToast}
        type="button"
      >
        CONTINUE
      </Button>
    </Wrap>
  );
}
