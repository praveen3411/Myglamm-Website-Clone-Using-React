import { Button, Text, useToast, Wrap, WrapItem } from "@chakra-ui/react";

export default function Toastone() {
  const toast = useToast();
  const statuses = ["Otp Sent to mobile number"];

  return (
    <Wrap>
      {statuses.map((status, i) => (
        <WrapItem key={i}>
          <Text
            onClick={() =>
              toast({
                title: `${status} toast`,
                status: status,
                isClosable: true,
              })
            }
          >
            Show {status} toast
          </Text>
        </WrapItem>
      ))}
    </Wrap>
  );
}
