import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar'
import Header from "./components/Header"
import Particles from "react-particles-js"
import AboutMe from "./components/AboutMe";

function App() {
  return (
      <>
      <Particles className='particles-canvas'
          params={{
              particles: {
                  number: {
                  value: 20,
                  density: {
                      enable: true,
                      value_area: 1300
              }
              },
                  shape: {
                      type: 'circle',
                      stroke: {
                          width: 6,
                          color: 'gray'
                      }
                  }
          }}} />
      <Navbar />
      <Header />
          <AboutMe />
      </>
  );
};

export default App;
