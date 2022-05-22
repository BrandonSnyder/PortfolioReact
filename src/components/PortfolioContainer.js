import React, { useState } from 'react';
import Navbar from './Navbar';
import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Project from './pages/Project';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Landing');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Landing') {
      return <Landing />;
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
    </div>
  );
}
