import { useContext } from "react";
import { AuthContext, AuthContextDataProps } from "../context/AuthContext";

export const useAuth = (): AuthContextDataProps => useContext(AuthContext)