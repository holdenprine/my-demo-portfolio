
import Header from './components/header/Header'
import Nav  from './components/nav/Nav';
import About from './components/about/About'
import Technologies from './components/technologies/Technologies'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './App.css';

function App() {
  return (
    
    <div className="App">
     
        <Header />
        <Nav/>
        <About />
        <Technologies/>
        <Projects />
        <Contact />
        <Footer /> 
     
    </div>
    
  );
}

export default App;
