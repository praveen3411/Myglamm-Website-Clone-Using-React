import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SkinComponent from "../AllComponents/skincomponent";
import Footer from "../Homecomponents.jsx/Footer";
import Two from "../Homecomponents.jsx/Hometwo";
import FirstNavbar from "../Navbars/FirstNavbar";
import ThirdNavbar from "../Navbars/NavbarThird";
import SecondNavbar from "../Navbars/SecondNavbar";

export default function Sanitizing() {
  const [santi, setSanti] = useState([]);
  let functionfour = () => {
    axios
      .get(`http://localhost:5000/api/santizingcare`)
      .then((res) => {
        setSanti(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    functionfour();
  }, []);
  return (
    <Box>
      <FirstNavbar />
      <SecondNavbar />
      <ThirdNavbar />
      <br />
      <br />
      <Box>
        <Two names={"SANITIZING CARE"} />
      </Box>
      <Box
        width={"89%"}
        margin={"auto"}
        display={"flex"}
        flexDir={"row"}
        flexWrap={"wrap"}
      >
        {santi.map((item) => (
          <Box key={item.id} padding={"24px"}>
            <SkinComponent
              src={item.avatar}
              name1={item.mname}
              name2={item.subname}
              rupee={item.cost}
            />
            <Link to={`/santizing/${item.id}`}>
              <Button
                width="200px"
                borderRadius={4}
                bg={"black"}
                color={"white"}
                _hover={{ bg: "pink", color: "black" }}
                mt={"-150px"}
              >
                CHECKOUT
              </Button>
            </Link>
          </Box>
        ))}
      </Box>
      <br />
      <Box margin={"auto"} width={"89%"}>
        <Footer />
      </Box>
    </Box>
  );
}
