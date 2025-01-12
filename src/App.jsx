import About from "./components/About";
import BigMenu from "./components/BigMenu";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import MobileMneu from "./components/MobileMneu";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Footer from "./components/Footer";

function App() {

  return (
    <main>
      <BigMenu/>
      <MobileMneu/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;


