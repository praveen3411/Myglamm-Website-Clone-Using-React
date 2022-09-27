import { useState } from "react";
import axios from "axios";

let initial = {
  avatar: "",
  mname: "",
  subname: "",
  cost: "",
  rating: "",
  ratings: "",
};
export default function AddData() {
  const [data, setData] = useState(initial);
  let handling = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  let submitdata = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/santizingcare", data);
  };

  return (
    <div>
      <form onSubmit={submitdata}>
        <input
          style={{ border: "2px solid black" }}
          type={"url"}
          name="avatar"
          placeholder="Enter Avatar url"
          value={data.avatar}
          onChange={handling}
        />
        <br />
        <br />
        <input
          type={"text"}
          style={{ border: "2px solid black" }}
          name="mname"
          placeholder="Enter First name"
          value={data.mname}
          onChange={handling}
        />
        <br />
        <br />
        <input
          type={"text"}
          style={{ border: "2px solid black" }}
          name="subname"
          placeholder="enter subname"
          value={data.subname}
          onChange={handling}
        />
        <br />
        <br />
        <input
          type={"number"}
          style={{ border: "2px solid black" }}
          name="cost"
          placeholder="enter price"
          value={data.cost}
          onChange={handling}
        />
        <br />
        <br />
        <input
          type={"number"}
          style={{ border: "2px solid black" }}
          name="rating"
          placeholder="enter rating"
          value={data.rating}
          onChange={handling}
        />
        <br />
        <br />
        <input
          type={"text"}
          style={{ border: "2px solid black" }}
          name="ratings"
          placeholder="enter people rating"
          value={data.ratings}
          onChange={handling}
        />
        <br />
        <br />
        <input
          style={{ border: "2px solid black" }}
          type={"submit"}
          value="Submit"
        />  
      </form>
      <br />
    </div>
  );
}
