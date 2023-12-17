import React from 'react';
import logo from './logo.png';
import '../App.css';

const Header=()=>{
 return(
  <header className="header">
  <div className='logo'>
    <img src={logo} alt='webiste logo'/>
  </div>
  <nav className="navigation">
  <label htmlFor="menu-toggle" className="icon">
        <p className="icon"><i className="fas fa-bars"></i></p>
        </label>
    <ul className="ullist">
   
        <li className="first" a href="#Home">HOME</li>
        <li className="grey" a href="About">ABOUT</li>
        <li  className="grey" a href="Service">SERVICES</li>
        <li className="grey" a href="FAQ">FAQ</li>
        <li className="grey"  a href="Contact">CONTACT</li>
    </ul>
  </nav>

  </header>



 );
}
export default Header;