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
// Helmet
import { Helmet } from "react-helmet-async";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8" />
        <title>Joe Napper | Web Developer</title>
        <meta
          name="description"
          content="Full stack web developer currently working on the next generation of CRM systems for CMIS-UK."
        />
      </Helmet>
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
