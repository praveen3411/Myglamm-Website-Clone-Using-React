import { Box, Flex, HStack, Image, Stack } from "@chakra-ui/react";
import FirstNavbar from "../Navbars/FirstNavbar";
import ThirdNavbar from "../Navbars/NavbarThird";
import SecondNavbar from "../Navbars/SecondNavbar";
import { useEffect, useRef, useState } from "react";
import { dataone } from "./Childrens";
import One from "../Homecomponents.jsx/Homeone";
import Two from "../Homecomponents.jsx/Hometwo";
import Three from "../Homecomponents.jsx/Homethree";
import Homefour from "../Homecomponents.jsx/Homefour";
import Homefive from "../Homecomponents.jsx/Homefive";
import Homesix from "../Homecomponents.jsx/Homesix";
import Footer from "../Homecomponents.jsx/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const ref = useRef(null);
  const [time, settime] = useState(0);
  if (time === dataone.length) {
    settime(0);
  }

  useEffect(() => {
    if (ref.current !== null) return;
    ref.current = setInterval(() => {
      settime((time) => time + 1);
    }, 3000);
  }, []);

  return (
    <Box>
      {/* first nabars */}
      <Box>
        <FirstNavbar />
        <SecondNavbar />
        <ThirdNavbar />
      </Box>
      {/* image coursel */}
      <Box cursor={"pointer"}>
        <Link to={"/makeup"}>
          <Image src={dataone[time]} alt="images" />
        </Link>
      </Box>
      <br />
      {/* images 3rd */}
      <Box>
        <Link to={"/collection"}>
          <One
            src={
              "https://files.myglamm.com/site-images/original/2240x614-copy_6.jpg"
            }
          />
        </Link>
      </Box>
      <br />
      {/* names */}
      <Box>
        <Two names={"IN THE SPOTLIGHT"} />
      </Box>
      <br />
      {/* box four */}
      <Flex w={"89%"} m="auto">
        <Link to={"/makeup"}>
          <HStack>
            <Box>
              <Three
                src={
                  "https://files.myglamm.com/site-images/original/700x488-avc.jpg"
                }
                name1={"FLAT 50% OFF"}
                name2={"GRAB THE DISCOUNT"}
              />
            </Box>
            <Box>
              <Three
                src={
                  "https://files.myglamm.com/site-images/original/700x488-avc_1.jpg"
                }
                name1={"LIT LIQUID LIPSTICK"}
                name2={"GRAB THE DISCOUNT"}
              />
            </Box>
            <Box>
              <Three
                src={
                  "https://files.myglamm.com/site-images/original/In-the-Spotlight-700x488.jpg"
                }
                name1={"MAKE UP UNDER 399"}
                name2={"GRAB THE DISCOUNT"}
              />
            </Box>
          </HStack>
        </Link>
      </Flex>
      {/* single images */}
      <br />
      <Box>
        <Stack spacing={3}>
          <Box>
            <Link to={"/skincare"}>
              <One
                src={
                  "https://files.myglamm.com/site-images/original/2240x614-C_6.gif"
                }
              />
            </Link>
          </Box>
          <Box>
            <Link to={"/skincare"}>
              <One
                src={
                  "https://files.myglamm.com/site-images/original/2240x614-Sleek-desktop_1.gif"
                }
              />
            </Link>
          </Box>
          {/* Again one name */}
          <Box>
            <Two names={"BANK PARTNER"} />
          </Box>
        </Stack>
      </Box>
      {/* bank cards */}
      <br />
      <Flex w={"89%"} m="auto">
        <Link to={"/offers"}>
          <HStack>
            <Box>
              <Three
                src={
                  "https://files.myglamm.com/site-images/original/IDFC-offer-banner-660x330_3.jpg"
                }
                name1={"FLAT 20% OFF"}
                name2={"GRAB THE DISCOUNT"}
              />
            </Box>
            <Box>
              <Three
                src={
                  "https://files.myglamm.com/site-images/768x432/simpl-offer-banner-660x330_6.jpg"
                }
                name1={"UPTO 10% OFF"}
                name2={"GRAB THE DISCOUNT"}
                height={"180px"}
                width={"370px"}
              />
            </Box>
            <Box>
              <Three
                src={
                  "https://files.myglamm.com/site-images/original/mobikwik-offer-banner-660x330_5.jpg"
                }
                name1={"CASHBACK UPTO 150"}
                name2={"GRAB THE DISCOUNT"}
              />
            </Box>
          </HStack>
        </Link>
      </Flex>
      {/* Best Sellers */}
      <Box>
        <Two names={"BEST SELLERS"} />
      </Box>
      <br />
      <Box>
        <Link to={"/collection"}>
          <Homefour />
        </Link>
      </Box>
      <br />
      <Box>
        <Two names={"ESSENTIAL BUDGET BUYS"} />
      </Box>
      <br />
      <Flex w={"89%"} m="auto">
        <HStack>
          <Link to={"/santizing"}>
            <Box>
              <Three
                src={
                  "https://files.myglamm.com/site-images/original/combo-Banner--700-x-488_1.jpg"
                }
                name1={"WIPEOUT"}
                name2={"Wipeout"}
              />
            </Box>
          </Link>
          <Link to={"/makeup"}>
            <Box>
              <Three
                src={
                  "https://files.myglamm.com/site-images/original/Glamm-Picks-700x488.jpg"
                }
                name1={"UNDER 499 STORE"}
                name2={"Grab Now Fast"}
              />
            </Box>
          </Link>
          <Link to={"/makeup"}>
            <Box>
              <Three
                src={
                  "https://files.myglamm.com/site-images/original/Glamm-Must-haves-desktop.jpg"
                }
                name1={"UNDER 999 STORE"}
                name2={"GRAB THE DISCOUNT"}
              />
            </Box>
          </Link>
        </HStack>
      </Flex>
      <br />
      <Box>
        <Two names={"SHOP FROM CATEGORIES"} />
      </Box>
      <br />
      <Box>
        <Homefive />
      </Box>
      <br />
      <br />
      <Box>
        <Two names={"KITS & COMBOS"} />
      </Box>
      <br />
      <Flex w={"89%"} m="auto">
        <HStack>
          <Box bg={"white"}>
            <Link to={"/makeup"}>
              <Homesix
                src={
                  "https://files.myglamm.com/site-images/original/desktop-mk-combo.jpg"
                }
                name1={"Makeup Combos"}
                name2={"Makeup Combos"}
              />
            </Link>
          </Box>
          <Box>
            <Link to={"offers"}>
              <Homesix
                src={
                  "https://files.myglamm.com/site-images/original/desktop-skin-combo.jpg"
                }
                name1={"Skincare Combos"}
                name2={"Skincare Combos"}
              />
            </Link>
          </Box>
          <Box>
            <Link to={"/offers"}>
              <Homesix
                src={
                  "https://files.myglamm.com/site-images/original/Desktop-combo.jpg"
                }
                name1={"Beauty Kits Under 499"}
                name2={"Beauty Kits Under 499"}
              />
            </Link>
          </Box>
        </HStack>
      </Flex>
      <br />
      <Box>
        <One
          src={
            "https://files.myglamm.com/site-images/original/Community-Banner-2240-x-344_1.jpg"
          }
        />
      </Box>
      <br />
      <Box>
        <One
          src={
            "https://files.myglamm.com/site-images/original/disclaimer-mgp_1.png"
          }
        />
      </Box>
      <br />
      <Box
        bg={"black"}
        width={"89%"}
        margin={"auto"}
        height={"540"}
        padding={"20px"}
        boxSizing={"border-box"}
        borderRadius={"10px"}
      >
        <Box ml={10}>
          <iframe
            width="1010"
            height="500"
            style={{ borderRadius: "10px" }}
            src="https://www.youtube.com/embed/GdcxfyKNiDg"
            title="Shraddha Kapoor Wants You To #TellMyGlammWhatYouWant | MyGlamm TV Ad"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Box>
      </Box>
      <br />
      <Box width={"89%"} m={"auto"}>
        <Footer />
      </Box>
    </Box>
  );
}
