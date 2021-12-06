
import { BrowserRouter } from "react-router-dom";
import About from "./components/about";
import NavBar from "./components/navbar";
import Portal from "./components/portal";
import Portfolio from "./components/portfolio";


function App() {
  return (
    <BrowserRouter>
    <div className="page-top" id="page-top">
      <NavBar />
      <Portal />
      <Portfolio />
      <About />
    </div>
    </BrowserRouter>
  );
}

export default App;
