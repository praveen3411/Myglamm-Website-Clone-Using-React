import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Dynamic from "../Homecomponents.jsx/dynamic";
import FirstNavbar from "../Navbars/FirstNavbar";
import ThirdNavbar from "../Navbars/NavbarThird";
import SecondNavbar from "../Navbars/SecondNavbar";
import {AiFillStepBackward} from "react-icons/ai"
export default function HairCareid() {
  let pro = useParams();
  const [gone, setGone] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/haircare/${pro.haircare_id}`)
      .then((res) => setGone(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, [pro]);
  let array = JSON.parse(localStorage.getItem("cartdata")) || [];
  let Local = () => {
    array = [...array, gone];
    localStorage.setItem("cartdata", JSON.stringify(array));
  };
  return (
    <Box>
      <FirstNavbar />
      <SecondNavbar />
      <ThirdNavbar />
      <br />
      <Link to={"/haircare"}>
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
        src={gone.avatar}
        name1={gone.mname}
        name2={gone.subname}
        rating={gone.rating}
        ratings={gone.ratings}
        cost={gone.cost}
        onClick={Local}
      />
    </Box>
  );
}
