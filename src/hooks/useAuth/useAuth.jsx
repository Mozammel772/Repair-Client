import { useContext } from "react";
import { AuthContext } from "../../Pages/Register/AuthProvider/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
