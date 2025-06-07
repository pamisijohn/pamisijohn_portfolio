import { useContext } from "react";
import { NavigationContext } from "../context/NavigationContextValue";

export const useNavigation = () => useContext(NavigationContext);
