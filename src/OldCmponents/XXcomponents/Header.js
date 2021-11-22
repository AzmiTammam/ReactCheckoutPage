import React from "react";

function Header() {
      return(
            <header>
            <a href='.' className='logo' >AZMITAMMAM</a>
            <nav>
                  <ul className='nav_links'>
                        <li> <a href='.'>Home</a> </li>
                        <li><a href='.'>Services</a></li>
                        <li><a href='.'>Contact</a></li>
                  </ul>
            </nav>
            </header>
      );
}

export default Header;