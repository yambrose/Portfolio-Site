import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import FrontPage from "./components/FrontPage";
import Portfolio from "./components/Portfolio";
import TopBar from "./components/TopBar";
import DialogTest from "./components/DialogTest";
import RevealOnScroll from "./components/RevealOnScroll";

export default function App() {
  return (
    <div className="bg-blueberry-800">
      
      <TopBar />

      <FrontPage />

      <AboutMe />

      <Portfolio />

      <Contact />


      {/* <DialogTest/> */}

    </div>
  );
}