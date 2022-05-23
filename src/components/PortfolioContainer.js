import React, { useState } from 'react';
import Navbar from './Navbar';
import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from './Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Landing');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Landing') {
      return <Landing />;
    }
    if (currentPage === 'AboutMe') {
      return (
        <div>
          <AboutMe />
          <Footer/>
        </div>);
    }
    if (currentPage === 'Portfolio') {
      return (
        <div>
          <Portfolio />
          <Footer/>
        </div>);
    }
    if (currentPage === 'Resume') {
      return (
        <div>
          <Resume />
          <Footer/>
        </div>);
    }
    return(
    <div>
      <Contact />
      <Footer/>
    </div>);
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
        
    </div>
  );
}
