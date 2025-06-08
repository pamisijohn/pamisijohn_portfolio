import { useNavigation } from "../../hooks/useNavigation";
import { useTheme } from "../../hooks/useTheme";

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollToSection } = useNavigation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=Abstract%20technology%20background%20with%20code%20elements%20and%20digital%20connections%2C%20modern%20web%20development%20concept%20with%20subtle%20blue%20and%20purple%20gradient%2C%20clean%20minimalist%20design%20with%20depth%20and%20dimension%2C%20high%20resolution%20digital%20art&width=1440&height=800&seq=hero-bg-1&orientation=landscape"
          alt="Hero background image"
          className="w-full h-full object-cover object-top"
        />
        <div
          className={`absolute inset-0 ${
            isDarkMode ? "bg-gray-900/70" : "bg-white/70"
          }`}></div>
      </div>

      <div className="container mx-auto px-6 py-20 z-10 md-flex-row">
        <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Hi, I&#39;m{" "}
            </span>
            <span
              className={`${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
              John
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 leading-relaxed">
            Fueled by espresso and curiosity, I craft intuitive, scalable web
            solutions.
          </h2>
          <p
            className={`text-lg mb-10 max-w-lg mx-auto md:mx-0 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
            Ready to collaborate and bring your vision to life—one perfectly
            tuned component at a time?
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("projects")}
              className={`px-8 py-3 rounded-md font-medium all-transition cursor-pointer whitespace-nowrap ${
                isDarkMode
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}>
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-8 py-3 rounded-md font-medium border-2 all-transition cursor-pointer whitespace-nowrap ${
                isDarkMode
                  ? "border-blue-400 text-blue-400 hover:bg-blue-400/10"
                  : "border-blue-600 text-blue-600 hover:bg-blue-600/10"
              }`}>
              Contact Me
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src="/hImg.png"
              alt="John's portrait"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button className="text-2xl cursor-pointer whitespace-nowrap">
          <i
            className={`fas fa-chevron-down ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}></i>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
