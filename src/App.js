import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import Demo from "./components/Demos/demo";
import UIKits from "./components/UIKits/uikits";
import AppSection from "./components/AppsSection/AppSection";
import ExtraPages from "./components/ExtraPages/ExtraPages";
import Ecommerce from "./components/Ecommerce/Ecommerce";
import Features from "./components/Features/Features";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSection />
        <Demo />
        <UIKits />
        <AppSection />
        <ExtraPages />
        <Ecommerce />
        <Features />
      </div>
    </Router>
  );
}

export default App;
