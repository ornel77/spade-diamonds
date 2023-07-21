import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './NavAdmin.scss'

function NavAdmin() {
  return (
    <section className='container'>
      <div className='nav-admin-container'>
        <ul className='nav-list'>
          <li>
            <NavLink to='/admin'> Gestion Concert </NavLink>
          </li>
          <li>
            <NavLink to='/admin-music' > Gestion Musiques </NavLink>
          </li>
        </ul>
      </div>
        <Outlet />
    </section>
  );
}

export default NavAdmin;
