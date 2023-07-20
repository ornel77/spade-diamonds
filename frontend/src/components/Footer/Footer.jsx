import React from 'react'
import { SiFacebook, SiInstagram } from 'react-icons/si';
import { IoLogoYoutube } from 'react-icons/io';
import { RiSoundcloudLine } from 'react-icons/ri';

import './Footer.scss'
import footerImg from '../../assets/image/sd4.jpeg'

function Footer() {
  return (
    <footer>
        <div className="container footer-container">
            <p className='copy'>
                &copy; SPADE DIAMONDS 2023
            </p>
            <ul className='socials'>
              <li>
                <a href='#'>
                  {' '}
                  <SiInstagram />{' '}
                </a>
              </li>
              <li>
                <a href='#'>
                  {' '}
                  <IoLogoYoutube />{' '}
                </a>
              </li>
              <li>
                <a href='#'>
                  {' '}
                  <SiFacebook />{' '}
                </a>
              </li>
              <li>
                <a href='#'>
                  {' '}
                  <RiSoundcloudLine />{' '}
                </a>
              </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer