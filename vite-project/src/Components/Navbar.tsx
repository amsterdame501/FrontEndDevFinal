import React from 'react';
const Navbar: React.FC = () => {
  return (
    <nav>
        <ul className ="navbar">
            <span><a href="#"> Home |</a></span>
            <span><a href="#"> Course |</a></span>
            <span><a href="#"> Login|</a></span>
        </ul>
    </nav>
  );
};

export default Navbar;
