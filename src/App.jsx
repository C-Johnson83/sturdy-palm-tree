import './index.css';

import Header from './components/Header';

import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="project-app">
      <Header />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;