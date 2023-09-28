import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import Demo from "./components/Demos/demo";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Link to={"#herosection"}>
          <HeroSection />
        </Link>
        <Link to={"#demo"}>
          <Demo />
        </Link>
      </div>
    </Router>
  );
}

export default App;
