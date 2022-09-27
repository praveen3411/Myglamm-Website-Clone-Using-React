import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../Homecomponents.jsx/Footer";
import Two from "../Homecomponents.jsx/Hometwo";
import Offerspages from "../Homecomponents.jsx/offercomponent";
import FirstNavbar from "../Navbars/FirstNavbar";
import ThirdNavbar from "../Navbars/NavbarThird";
import SecondNavbar from "../Navbars/SecondNavbar";

export default function Offers() {
  return (
    <Box>
      <FirstNavbar />
      <SecondNavbar />
      <ThirdNavbar />
      <br />
      <Box>
        <Two names={"OFFERS OF THE WEEK"} />
      </Box>
      <br />
      <Offerspages
        src={
          "https://files.myglamm.com/site-images/768x432/simpl-offer-banner-660x330_6.jpg"
        }
        name1={"Buy Now Pay Later - Get 10% cashback in Simpl."}
        name2={
          "Get 10% Cashback Upto Rs. 100, No Minimum Order Value. Valid Once per user during the offer period. T&C apply"
        }
        name3={"SHOP NOW"}
      />
      <Offerspages
        src={
          "https://files.myglamm.com/site-images/original/mobikwik-offer-banner-660x330_5.jpg"
        }
        name1={"Get up to ₹150 Cashback"}
        name2={
          "Get Cashback upto Rs.150 on a minimum transaction of Rs. 250. Twice Per User | Valid till 31st July 2022"
        }
        name3={"SHOP NOW"}
      />
      <Offerspages
        src={
          "https://files.myglamm.com/site-images/768x432/paytm-offer-banner-660x330_3.jpg"
        }
        name1={"Get Upto Rs.150 Paytm Cashback"}
        name2={
          "Min transaction Rs.199| Offer valid only on payment via Paytm Wallet | Valid Twice per user b/w 1st- 31st July | T&C Apply"
        }
        name3={"SHOP NOW"}
      />
      <Offerspages
        src={
          "https://files.myglamm.com/site-images/original/IDFC-offer-banner-660x330_3.jpg"
        }
        name1={"Get upto ₹100 cashback on paying via CRED pay"}
        name2={
          "Get Cashback upto Rs.100 on a minimum transaction of Rs. 199. Once Per User | Valid till 31st July 2022"
        }
        name3={"SHOP NOW"}
      />
      <Offerspages
        src={
          "https://files.myglamm.com/site-images/original/IDFC-offer-banner-660x330_4.jpg"
        }
        name1={"Get Flat 10% discount with IDFC FIRST BANK Credit Card"}
        name2={
          "Flat 10% discount up to ₹300 using IDFC FIRST BANK Credit Card on MyGlamm app/website"
        }
        name3={"SHOP NOW"}
      />
      <Offerspages
        src={
          "https://files.myglamm.com/site-images/original/IDFC-offer-banner-660x330_2.jpg"
        }
        name1={"Apply For Lifetime Free IDFC FIRST Bank Credit Card"}
        name2={"Enjoy Rs 750 on Myglamm Welcome voucher on Card approval"}
        name3={"SHOP NOW"}
      />
      <Offerspages
        src={"https://www.myglamm.com/images/img-default-myglamm.png"}
        name1={"Applicable On 1st App Purchase"}
        name2={"Get Flat 40% off + Additional 40% Cashback"}
        name3={"APPBEST40"}
      />
      <br />
      <br />
      <Box width={"89%"} m={"auto"}>
        <Footer />
      </Box>
    </Box>
  );
}
