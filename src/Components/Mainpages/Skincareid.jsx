import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Dynamic from "../Homecomponents.jsx/dynamic";
import FirstNavbar from "../Navbars/FirstNavbar";
import ThirdNavbar from "../Navbars/NavbarThird";
import SecondNavbar from "../Navbars/SecondNavbar";
import { AiFillStepBackward } from "react-icons/ai";
export default function Skincareid() {
  const parms = useParams();
  const [bro, setBro] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/skincare/${parms.skincare_id}`)
      .then((res) => {
        setBro(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [parms]);
  let array = JSON.parse(localStorage.getItem("cartdata")) || [];
  let Local = () => {
    array = [...array, bro];
    localStorage.setItem("cartdata", JSON.stringify(array));
  };
  return (
    <Box>
      <FirstNavbar />
      <SecondNavbar />
      <ThirdNavbar />
      <br />
      <Link to={"/skincare"}>
        <Button
          color={"white"}
          bg={"black"}
          _hover={{ bg: "pink.400", color: "black" }}
          leftIcon={<AiFillStepBackward />}
        >
          Go-Back
        </Button>
      </Link>
      <Dynamic
        src={bro.avatar}
        name1={bro.mname}
        name2={bro.subname}
        rating={bro.rating}
        ratings={bro.ratings}
        cost={bro.cost}
        onClick={Local}
      />
    </Box>
  );
}
