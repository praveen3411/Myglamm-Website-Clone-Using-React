import { Box } from "@chakra-ui/react";
import ProductSimple from "../Homecomponents.jsx/Bagcomponent";
import FirstNavbar from "../Navbars/FirstNavbar";
import ThirdNavbar from "../Navbars/NavbarThird";
import SecondNavbar from "../Navbars/SecondNavbar";

export default function Bag() {
  let array = JSON.parse(localStorage.getItem("cartdata")) || [];
  return (
    <Box>
      <FirstNavbar />
      <SecondNavbar />
      <ThirdNavbar />
      <Box
        display={"flex"}
        flexDir="row"
        justifyContent={"space-around"}
        flexWrap={"wrap"}
      >
        {array.map((item) => (
          <Box key={item.id}>
            <ProductSimple
              key={item.id}
              src={item.avatar}
              name1={item.mname}
              name2={item.rating}
              name3={item.cost}
              name4={item.ratings}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
