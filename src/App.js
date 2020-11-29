// Global Style
import GlobalStyle from "./components/GlobalStyle";
// Page Components
import Home from "./pages/Home";
// Components
// importvbar from "./components/Navbar";
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
