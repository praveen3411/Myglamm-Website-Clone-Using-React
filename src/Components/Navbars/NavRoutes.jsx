import { Route, Routes } from "react-router-dom";
import Private from "../Authentations/Private";
import Bag from "../Mainpages/Bag";
import Collection from "../Mainpages/Collection";
import Collectionid from "../Mainpages/Collectionid";
import Haircare from "../Mainpages/Haircare";
import HairCareid from "../Mainpages/haircareid";
import Home from "../Mainpages/Home";
import Makeup from "../Mainpages/Makeup";
import Makeupid from "../Mainpages/makeupid";
import MyGlam from "../Mainpages/MyGlam";
import Myglammstore from "../Mainpages/Myglammstore";
import Offers from "../Mainpages/Offers";
import Rewards from "../Mainpages/Rewards";
import Sanitizing from "../Mainpages/Sanitizing";
import Santizingid from "../Mainpages/Santizingid";
import Shopnow from "../Mainpages/Shopnow";
import Skincare from "../Mainpages/Skincare";
import Skincareid from "../Mainpages/Skincareid";
import User from "../Mainpages/User";

export default function NavRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopnow" element={<Shopnow />} />
        <Route path="/myglamstore" element={<Myglammstore />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/user" element={<User />} />
        <Route
          path="/makeup"
          element={
            <Private>
              <Makeup />
            </Private>
          }
        />
        <Route
          path="/makeup/:makeup_id"
          element={
            <Private>
              <Makeupid />
            </Private>
          }
        />
        <Route path="/haircare" element={<Haircare />} />
        <Route path="/haircare/:haircare_id" element={<HairCareid />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/skincare/:skincare_id" element={<Skincareid />} />
        <Route path="/santizing" element={<Sanitizing />} />
        <Route path="/santizing/:santizing_id" element={<Santizingid />} />
        <Route
          path="/collection"
          element={
            <Private>
              <Collection />
            </Private>
          }
        />
        <Route
          path="/collection/:collection_id"
          element={
            <Private>
              <Collectionid />
            </Private>
          }
        />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/myglam" element={<MyGlam />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
    </div>
  );
}
