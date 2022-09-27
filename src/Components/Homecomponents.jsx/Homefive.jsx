import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HomeF from "./homef";

export default function Homefive() {
  return (
    <Box>
      <Box width={"89%"} m={"auto"}>
        <HStack>
          <Link to={"/santizing"}>
            <HomeF
              src={
                "https://files.myglamm.com/site-images/original/SKin-1-2.png"
              }
              name={"Skin"}
            />
          </Link>
          <Link to={"/makeup"}>
            <HomeF
              src={"https://files.myglamm.com/site-images/original/Lips-3.png"}
              name={"Lips"}
            />
          </Link>
          <Link to={"/haircare"}>
            <HomeF
              src={
                "https://files.myglamm.com/site-images/original/Superfoods-Model-120-X-120-px_2.jpg"
              }
              name={"Hair"}
            />
          </Link>
          <Link to={"makeup"}>
            <HomeF
              src={"https://files.myglamm.com/site-images/original/Eyes-4.png"}
              name={"Eyes"}
            />
          </Link>
          <Link to={"/collection"}>
            <HomeF
              src={"https://files.myglamm.com/site-images/original/Face-5.png"}
              name={"Face"}
            />
          </Link>
          <Link to={"/collection"}>
            <HomeF
              src={"https://files.myglamm.com/site-images/original/Nails-1.png"}
              name={"Nails"}
            />
          </Link>
          <Link to={"/santizing"}>
            <HomeF
              src={
                "https://files.myglamm.com/site-images/original/App-PersonalCare_2.png"
              }
              name={"Sanitizing Care"}
            />
          </Link>
          <Link to={"/collection"}>
            <HomeF
              src={"https://files.myglamm.com/site-images/original/Bath.png"}
              name={"Bating"}
            />
          </Link>
        </HStack>
      </Box>
    </Box>
  );
}
