import { useTheme } from "../../hooks/useTheme";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
