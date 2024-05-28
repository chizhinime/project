import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Portfolio from './components/Portfolio';

const App = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'blog':
        return <Blog />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setPage={setPage} />
      {renderPage()}
    </div>
  );
};

export default App;