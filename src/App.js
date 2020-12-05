// Global Styles
import GlobalStyle from "./components/GlobalStyle";
// Components
import Navbar from "./components/Nav/Navbar";
import FooterSection from "./components/FooterSection";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
// Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/articles">
          <Articles />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

      <FooterSection />
    </div>
  );
}

export default App;
