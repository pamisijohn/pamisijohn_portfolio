import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <section id="#home">
        <Hero />
      </section>
      {/* <section id="#about">
        <About />
      </section>
      <section id="#portfolio">
        <Portfolio />
      </section>
      <section id="#contact">
        <Contact />
      </section> */}
    </main>
  );
};

export default App;
