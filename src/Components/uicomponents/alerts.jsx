import { Alert, AlertIcon, Box } from "@chakra-ui/react";

export default function Alerts() {
  return (
    <Box>
      <Alert status="error">
        <AlertIcon />
        Item Added to cart
      </Alert>
    </Box>
  );
}
