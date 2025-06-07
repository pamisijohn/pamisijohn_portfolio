import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextValue";

export const useTheme = () => useContext(ThemeContext);
