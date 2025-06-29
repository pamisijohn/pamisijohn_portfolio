import Layout from "./components/layout/Layout";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import SkillsSection from "./components/sections/SkillsSection";

import { NavigationProvider } from "./context/NavigationContext";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <Layout>
          <HeroSection />
          <ProjectSection />
          <SkillsSection />
          <ContactSection />
        </Layout>
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default App;
