import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColletionHover from "../Hovercomponents/collectionhover";
import Haircarehover from "../Hovercomponents/Haircarehover";
import MakeupHover from "../Hovercomponents/MakeupHover";
import MyGlamStudio from "../Hovercomponents/Myglamstudiohover";
import OffersHover from "../Hovercomponents/Offershover";
import Sanitizingcare from "../Hovercomponents/Sanitizingcare";
import Skincare from "../Hovercomponents/Skincare";
import "./Navbar.css";
export default function ThirdNavbar() {
  return (
    <Box>
      <Box
        height={"35px"}
        width={"87%"}
        margin="auto"
        display={"flex"}
        justifyContent={"space-between"}
        mt={"4"}
        fontSize="14px"
        fontWeight={"semibold"}
        zIndex={1}
      >
        <Link to={"/"}>
          <Text id="navone">HOME</Text>
        </Link>

        <Link to={"/makeup"}>
          <div className="dropdown">
            <Text id="navone" className="dropbtn">
              MAKEUP
            </Text>
            <div id="one1" className="dropdown-content">
              <MakeupHover />
            </div>
          </div>
        </Link>
        <Link to={"/haircare"}>
          <div className="dropdown">
            <Text id="navone" className="dropbtn">
              HAIRCARE
            </Text>
            <div id="one2" className="dropdown-content">
              <Haircarehover />
            </div>
          </div>
        </Link>
        <Link to={"/skincare"}>
          <div className="dropdown">
            <Text id="navone" className="dropbtn">
              SKINCARE
            </Text>
            <div id="one3" className="dropdown-content">
              <Skincare />
            </div>
          </div>
        </Link>
        <Link to={"/santizing"}>
          <div className="dropdown">
            <Text id="navone" className="dropbtn">
              SANITIZING CARE
            </Text>
            <div id="one4" className="dropdown-content">
              <Sanitizingcare />
            </div>
          </div>
        </Link>
        <Link to={"/collection"}>
          <div className="dropdown">
            <Text id="navone" className="dropbtn">
              COLLECTION
            </Text>
            <div id="one5" className="dropdown-content">
              <ColletionHover />
            </div>
          </div>
        </Link>
        <Link to={"/rewards"}>
          <Text id="navone">REWARDS</Text>
        </Link>
        <Link to={"/myglam"}>
          <div className="dropdown">
            <Text id="navone" className="dropbtn">
              MYGLAM STUDIO
            </Text>
            <div id="one7" className="dropdown-content">
              <MyGlamStudio />
            </div>
          </div>
        </Link>
        <Link to={"/offers"}>
          <Text id="navone" className="dropbtn">
            <div className="dropdown">
              <Text id="navone" className="dropbtn">
                OFFER
              </Text>
              <div id="one8" className="dropdown-content">
                <OffersHover />
              </div>
            </div>
          </Text>
        </Link>
      </Box>
      <hr style={{ boxshadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px" }} />
    </Box>
  );
}
