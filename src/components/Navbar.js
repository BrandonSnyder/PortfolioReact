import React from 'react';

export default function Navbar({currentPage, handlePageChange}){
    return(
        <div className='navbarDiv'>
        
          
          
          
          <div>
          <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#Landing"
          onClick={() => handlePageChange('Landing')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'Landing' ? 'nav-link landing' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>        
    </ul>
          </div>
        </div>
  );
    }