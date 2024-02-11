import './App.css';
import Project from './components/Project';
import Header from './components/Header';
import Picture from './components/Picture';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="project-app">
      <Project />
      <Header />
      <Picture />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;