import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Resume from "./components/resume";
import Experience from "./components/experience";
// import Referals from "./components/referals";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Projects />
      {/*<Referals /> */}
      <Resume />
    </div>
  );
}

export default App;
