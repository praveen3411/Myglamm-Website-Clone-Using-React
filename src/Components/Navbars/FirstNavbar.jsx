import { ImGift } from "react-icons/im";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { BsShop } from "react-icons/bs";
import "./Navbar.css";

export default function FirstNavbar() {
  return (
    <Box>
      <header id="header-1">
        <nav>
          <Box width={"800px"}>
            <ul>
              <li>
                <Link to="/">
                  <ImGift id="c1" className="cl" />
                </Link>
              </li>
              <li>FLAT 199 STORE</li>
              <li className="cl">
                <Link to="/collection">SHOP NOW</Link>
              </li>
            </ul>
          </Box>
          <ul>
            <li>
              <BsShop id="c1" />
            </li>
            <li>
              <Link to="/myglamstore">MyGLAMM STORE</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Box>
  );
}
