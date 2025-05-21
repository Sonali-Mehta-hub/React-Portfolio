import Navbar from "./src/components/Navbar";
import About from "./src/components/About";
import Skill from "./src/components/Skill";
import Project from "./src/components/Project";
import Footer from "./src/components/Footer";
import Contact from "./src/components/Contact";
export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
