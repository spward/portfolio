import "./App.scss";
import { Header } from "./components/Header";
import { Landing } from "./components/Landing";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Project } from "./components/Project";
import { Routes, Route } from "react-router-dom";
import { ReactComponent as LinkedInLogo } from "./images/linkedin.svg";
import { ReactComponent as GithubLogo } from "./images/github.svg";
function App() {
  return (
    <div className="App">
      <Header />

      <a
        href="https://www.github.com/spward"
        target="_blank"
        rel="noreferrer"
        className="icon github"
      >
        <GithubLogo />
      </a>
      <a
        href="https://www.linkedin.com/in/sward7"
        target="_blank"
        rel="noreferrer"
        className="icon linkedin"
      >
        <LinkedInLogo />
      </a>
      <Routes>
        <Route path="/" element={<Landing />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/work" element={<Work />} exact />
        <Route path="/work/:project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
