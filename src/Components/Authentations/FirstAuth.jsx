import { Box } from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { useState } from "react";

export const FirstAuthContext = React.createContext();
let initail = {
  isAuth: false,
  token: null,
};
export default function Newlycreatedauthcontext({ children }) {
  const [state, setState] = useState(initail);
  let ravan = useRef(null);
  let isLogin = (token) => {
    setState({
      ...state,
      isAuth: true,
      token: token,
    });
  };
  let isLogout = (token) => {
    setState({
      ...state,
      isAuth: false,
      token: token,
    });
  };
  let isfocus = () => {
    ravan.current.focus();
  };
  return (
    <Box>
      <FirstAuthContext.Provider
        value={{ state, isLogin, isLogout, ravan, isfocus }}
      >
        {children}
      </FirstAuthContext.Provider>
    </Box>
  );
}
