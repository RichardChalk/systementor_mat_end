import "./App.css";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home";
import { Testominial } from "./Components/Testominial";
import { Work } from "./Components/Work";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testominial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
