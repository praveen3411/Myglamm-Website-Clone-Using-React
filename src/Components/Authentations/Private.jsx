import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { FirstAuthContext } from "./FirstAuth";

export default function Private({ children }) {
  const { state } = useContext(FirstAuthContext);
  if (!state.isAuth) {
    return <Navigate to="/user" />;
  }
  return children;
}
