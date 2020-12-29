// Global Styles
import GlobalStyle from "./components/GlobalStyle";
// Components
import Navbar from "./components/Nav/Navbar";
import FooterSection from "./components/FooterSection";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// Router
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>

      <FooterSection />
    </div>
  );
}

export default App;
