import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Training from "./sections/Training";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import IntegratedServices from "./sections/IntegratedServices";
import Governance from "./sections/Governance";
import BBbee from "./sections/BBbee";
import CoreValues from "./sections/CoreValues";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Training />
      <IntegratedServices />
      <Governance />
      <BBbee />
      <CoreValues />
      <Contact />
      <Footer />
    </>
  );
}

export default App;