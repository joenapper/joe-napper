import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import GlobalStyles from "./constants/GlobalStyles";
import { Home } from "./pages/Home";

const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <Home />
    <Footer />
  </>
);

export default App;
