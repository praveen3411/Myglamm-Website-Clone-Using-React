import { Img } from "@chakra-ui/react";

export default function Imagess({ pathing }) {
  return (
    <div>
      <Img src={pathing} width="210px" height="45px" alt="images" />
    </div>
  );
}
