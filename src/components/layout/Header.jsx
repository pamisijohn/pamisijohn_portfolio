import { useTheme } from "../../hooks/useTheme";
import { useNavigation } from "../../hooks/useNavigation";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { scrollToSection, activeSection, isScrolled, toggleMenu, isMenuOpen } =
    useNavigation();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? "bg-gray-800/90 backdrop-blur-md"
            : "bg-white/90 backdrop-blur-md shadow-md"
          : isDarkMode
          ? "bg-transparent"
          : "bg-transparent"
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight cursor-pointer"
          onClick={() => scrollToSection("home")}>
          J
          <span className={`${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
            P
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["home", "projects", "skills", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item);
              }}
              className={`text-sm capitalize tracking-wider font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                activeSection === item
                  ? isDarkMode
                    ? "text-blue-400"
                    : "text-blue-600"
                  : isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full cursor-pointer !rounded-button whitespace-nowrap"
            aria-label="Toggle dark and light mode">
            <i
              className={`fas ${
                isDarkMode ? "fa-sun text-yellow-300" : "fa-moon text-gray-700"
              }`}></i>
          </button>
        </nav>

        {/* MObile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark and light mode"
            className="p-2 mr-4 rounded-full cursor-pointer !rounded-button whitespace-nowrap">
            <i
              className={`fas ${
                isDarkMode ? "fa-sun text-yellow-300" : "fa-moon text-gray-700"
              }`}></i>
          </button>
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-xl cursor-pointer !rounded-button whitespace-nowrap">
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0"
        } ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-6 py-4">
          {["home", "projects", "skills", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item);
              }}
              className={`block py-3 text-sm capitalize tracking-wider font-medium transition-colors duration-300 cursor-pointer ${
                activeSection === item
                  ? isDarkMode
                    ? "text-blue-400"
                    : "text-blue-600"
                  : isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
