// const url = import.meta.env.VITE_API_URL;
import { Navigate } from "react-router-dom";
import { getItemFromLocalStorage } from "../utitlity/storage";

export const URL = "https://dev-api.warebase.com.ng/api/v1";
// export const URL = "http://localhost:3535/api/v1";


export const ProtectedRoute = ({ children }) => {
  const token = getItemFromLocalStorage("wb_token");
  if (token) {
    return children;
  } else {
    return <Navigate to={`/login`} replace />;
  }
};
