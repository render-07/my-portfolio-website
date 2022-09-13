import WorkingNow from "./components/WorkingNow/WorkingNow";
import Education from "./components/Education/Education";
import Experiences from "./components/Experiences/Experiences";
import Landing from "./components/Landing/Landing";
import Skills from "./components/Skills/Skills";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import WhatIDo from "./components/WhatIDo/WhatIDo";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Landing />
        <WhatIDo />
        <Experiences />
        <Skills />
        <WorkingNow />
        <Education />
        <Footer />
      </div>
    </div>
  );
};
//
export default App;
