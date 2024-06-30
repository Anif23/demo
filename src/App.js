import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />   
      <Footer />
    </div>
  );
}
  
export default App;
