import "./App.css";
import Header from "./Components/Header";
import Tokenomic from "./Components/Tokenomic";
import Utility from "./Components/Utility";
import Footer from "./Components/Footer";
import Roadmap from "./Components/Roadmap";
import MyyAccordion from "./Components/MyyAccordion";
import BackToTop from './Components/BackToTop'
import Preloder from './Components/Preloder'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  <script></script>;
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <div className="bg-[#0A4740] overflow-hidden">
      <Preloder/>
      <BackToTop/>
      <Header />
      <Tokenomic />
      <Utility />
      <Roadmap />
      <MyyAccordion />
      <Footer />
    </div>
  );
}

export default App;

 