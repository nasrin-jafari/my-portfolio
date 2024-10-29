import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {Route, Routes} from "react-router-dom";
import {About, Contact, Home, Portfolio, Skills} from "./containers";
import particles from "./utils/particles";
import {NavBar} from "./components";

const App = () => {
  const handleInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className="App">
      <Particles id="particles" options={particles} init={handleInit} />
      <NavBar />
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
