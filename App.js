
import Header from './src/components/header/Header'
import Nav  from './src/components/nav/Nav';
import About from './src/components/about/About'
import Technologies from './src/components/technologies/Technologies'
import Projects from './src/components/projects/Projects'
import Contact from './src/components/contact/Contact'
import Footer from './src/components/footer/Footer'
import './App.css';

function App() {
  return (
    
    <div className="App">
      <html>
        <Header />
        <Nav/>
        <About />
        <Technologies/>
        <Projects />
        <Contact />
        <Footer /> 
      </html>
    </div>
    
  );
}

export default App;
