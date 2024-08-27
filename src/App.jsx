import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import FrontPage from "./components/FrontPage";
import Portfolio from "./components/Portfolio";
import TopBar from "./components/TopBar";
import DialogTest from "./components/DialogTest";

export default function App() {
  return (
    <div className="flex flex-col">
      <TopBar />
      <FrontPage />
      <AboutMe />
      <Portfolio />
      <Contact />
      {/* <DialogTest/> */}
    </div>
  );
}