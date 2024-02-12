import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './index.css';

const componentsByPage = {
  about: About,
  portfolio: Portfolio,
  contact: Contact,
  resume: Resume,
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('about');

  const handleNavigationClick = (page) => {
    setCurrentPage(page);
  };

  const CurrentComponent = componentsByPage[currentPage];

  return (
    <div>
      <Header />
    
      <nav>
        <ul>
          <li onClick={() => handleNavigationClick('about')}>About Me</li>
          <li onClick={() => handleNavigationClick('portfolio')}>Portfolio</li>
          <li onClick={() => handleNavigationClick('contact')}>Contact Me</li>
          <li onClick={() => handleNavigationClick('resume')}>Resume</li>
        </ul>
      </nav>
    
      <main>
        {CurrentComponent && <CurrentComponent />}
      </main>
      
    </div>
  );
};

export default App;
