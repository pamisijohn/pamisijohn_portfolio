import { useNavigation } from "../../hooks/useNavigation";
import { useTheme } from "../../hooks/useTheme";

const Footer = () => {
  const { isDarkMode } = useTheme();
  const { scrollToSection } = useNavigation();

  return (
    <footer
      className={`py-10 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-800 text-white"
      }`}>
      <div className="container mx-auto px-6">
        <div className="flex-between">
          <div className="mb-6 md:mb-0">
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight cursor-pointer"
              onClick={() => scrollToSection("home")}>
              J<span className="text-blue-400">P</span>
            </a>
            <p className="mt-2 text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            {["Home", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className="text-sm text-gray-400 hover:text-white color-transition cursor-pointer">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex-between">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} John Pamisi. All rights reserved.
          </p>

          <button
            onClick={() => scrollToSection("home")}
            className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-gray-700 center-flex hover:bg-gray-600 color-transition cursor-pointer whitespace-nowrap">
            <i className="fas fa-arrow-up text-gray-300"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
