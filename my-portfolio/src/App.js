import logo from './logo.svg';
import './App.css';
import './style.css'
import Header from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Services from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Services/>
    <Skills/>
    <Experience/>
    <Contact />
    <Footer/>    
    </>
  );
}

export default App;
