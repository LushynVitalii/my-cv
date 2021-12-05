import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  const [mySmileTitle, setMySmileTitle] = useState("");
  useEffect(() => {
    setMySmileTitle(document.title);
  }, []);

  useEffect(() => {
    let showingAlert = false;
    let interval = setInterval(() => {
      document.title = showingAlert ? mySmileTitle : "Vitalii Lushyn CV";
      showingAlert = !showingAlert;
    }, 2000);

    return () => clearInterval(interval);
  }, [mySmileTitle]);

  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 1300,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "gray",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio />
      <Experience />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
