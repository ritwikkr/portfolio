import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutMe />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
