import './App.css';
// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      const URL = "https://kb-portfolio-lab.herokuapp.com/";
      <Header />
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={"https://kb-portfolio-lab.herokuapp.com/projects/"} />
        </Route>
        <Route path="/about">
          <About URL={"https://kb-portfolio-lab.herokuapp.com/about/"} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
