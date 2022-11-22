import React from 'react';
import '../../assets/css/Index.css';
import one from '../../assets/image/one.png';

function Header() { 
  return (
    <header className="App-header">
      <nav className="Topbar">
        <div className='Logoimage'>
        <img src= {one} alt="infinite logo" />
        </div>

        <ul className='firstul'>
          <li className='listitem'><a href="#Contact">Contact</a></li>
          <li className='listitem'><a href="#Expertise">Expertise</a></li>
          <li className='listitem'><a href="#verticals">Verticals</a></li>
          <li className='listitem'><a href="#Services">Services</a></li>
          <li className='listitem'><a href="#About Us">About Us</a></li>
          <li className='listitem'><a href="#Home">Home</a></li>
        </ul>
      </nav>
    </header>
  )


}
export default Header;