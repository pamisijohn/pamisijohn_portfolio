import Layout from "./components/layout/Layout";
import { NavigationProvider } from "./context/NavigationContext";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <Layout></Layout>
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default App;
