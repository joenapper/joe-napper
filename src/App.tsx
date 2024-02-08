import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import GlobalStyles from "@constants/GlobalStyles";
import { Home } from "@pages/Home";

import "@fontsource/roboto";
import "@fontsource-variable/inter";

// TODO: Review why styled components throw console warnings if none transient props are used

const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <Home />
    <Footer />
  </>
);

export default App;
