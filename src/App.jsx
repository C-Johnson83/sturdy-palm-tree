// App.js
import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
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
      <Header handleNavigationClick={handleNavigationClick} />
      <main>
        {CurrentComponent && <CurrentComponent />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
