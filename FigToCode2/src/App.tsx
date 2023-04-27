import "./App.css";
import Header from "./components/Header";
import About from "./components/AboutUs";
import How from "./components/How";
import Price from "./components/Pricing";
import Faq from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div style={{ margin: "16px" }}>
        <Header />
        <About />
        <How />
        <Price />
        <Faq />
      </div>
      <Footer />
    </div>
  );
}

export default App;
