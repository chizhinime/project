import React, { useState } from 'react';

const Navbar = ({ setPage }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => setPage('home')}>Home</li>
        <li onClick={() => setPage('blog')}>Blog</li>
        <li onClick={() => setPage('about')}>About</li>
        <li onClick={() => setPage('portfolio')}>Portfolio</li>
      </ul>
    </nav>
  );
};

export default Navbar;