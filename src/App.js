import "./App.css";
import { About } from "./Components/About";
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
    </div>
  );
}

export default App;
