import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Quali from "./components/qualification/Quali";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Quali />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
