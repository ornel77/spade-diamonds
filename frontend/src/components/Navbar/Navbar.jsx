import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { SlLogin } from 'react-icons/sl';
import { SiFacebook, SiInstagram } from 'react-icons/si';
import { IoLogoYoutube } from 'react-icons/io';
import { RiSoundcloudLine } from 'react-icons/ri';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';
import './Navbar.scss';
import logo from '../../assets/image/logo_spade_white.png';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className=''>
      <div className='container nav-container'>
        <nav className='nav-desktop'>
          <ul className='nav-list'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/musics'>Music</NavLink>
            </li>
            <li>
              <NavLink to='/videos'>Videos</NavLink>
            </li>
            <li>
              <NavLink to='/admin' className='admin'>
                <SlLogin />
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className='band-name'>
          <h2>SPADE DIAMONDS</h2>
        </div>
        <ul className='socials'>
          <li>
            <a href='https://www.instagram.com/spadediamonds/' target="_blank">
              {' '}
              <SiInstagram />{' '}
            </a>
          </li>
          <li>
            <a href='https://www.youtube.com/@SpadeDiamonds/featured' target="_blank">
              {' '}
              <IoLogoYoutube />{' '}
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com/spadediamonds' target="_blank">
              {' '}
              <SiFacebook />{' '}
            </a>
          </li>
          <li>
            <a href='https://soundcloud.com/spadediamonds' target="_blank">
              {' '}
              <RiSoundcloudLine />{' '}
            </a>
          </li>
        </ul>

        {/* Burger Icons */}
        <div className='container burger-menu' onClick={handleClick}>
          <img src={logo} alt='' />
          <div className='burger-icons'>
            {!nav ? <HiMenuAlt3 size={30}/> : <FaTimes size={30}/>}
          </div>
        </div>

        {/* Mobile Menu */}
        <nav className={nav ? 'nav-mobile active': 'nav-mobile'}>
          <ul className='nav-list-mobile'>
            <li>
              <NavLink to='/' onClick={handleClick}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/musics' onClick={handleClick}>Music</NavLink>
            </li>
            <li>
              <NavLink to='/videos' onClick={handleClick}>Videos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
