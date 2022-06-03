import React, { useState } from 'react'
import {  Link } from 'react-router-dom';

import Hamburger from '../../Images/hamburger.svg'
import Close from '../../Images/close.svg'
import Logo from '../../Images/Dark.svg'
import MinimalLogo from '../../Images/Logo_minimal.svg'
import Button from '../Button/Button'
import './Navbar.css'


const Navbar = ({activePage}) => {
  const [active, setActive] = useState(activePage);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
        <div className='app__navbar'>
          <Link to="/">
            <img className='app__logo' src={Logo} alt="" />
            <img className='app__minimal-logo' src={MinimalLogo} alt="" />
          </Link>
            <label htmlFor="nft">
              <input name='nft' placeholder='Search Item Here' />
            </label>
            <ul className="app__navbar_list-items">
              <li className={`semibold_paragraph-1 ${active==='/' ? "active" : ""}`}><Link to="/" onClick={() =>setActive('/')}>Explore</Link></li>
              <li className={`semibold_paragraph-1 ${active==='item' ? "active" : ""}`}><Link to="/item" onClick={() =>setActive('item')}>My Items</Link></li>
              <li className={`semibold_paragraph-1 ${active==='user-profile' ? "active" : ""}`}><Link to="/user-profile"onClick={() =>setActive('user-profile')}>Following</Link></li>
            </ul>
            <div className="app__navbar-buttons">
              <Button type={'filled'} text='Create' onPress={()=> window.open('/create','_self')}/>
              <Button width={146} height={39} text='Connect'/>
            </div>
            <div className="app__smallscreen-navbar">
              <img className='pointer' src={Hamburger} alt="" onClick={() => setToggleMenu(true)} />
              {toggleMenu &&(
                <div className="app__navbar-smallscreen_overlay">
                  <div className="app__navbar_top-bar">
                    <img src={Logo} alt="" />
                    <img className='pointer' src={Close} alt="" onClick={() => setToggleMenu(false)}/>
                  </div>
                  <div className="divider"></div>
                  <ul className="app__navbar-smallscreen_list-items">
                    <li className={`heading-1 heading ${active==='/' ? "active" : ""}`} onClick={() => setToggleMenu(false)}><Link to="/" onClick={() =>setActive('/')}>Explore</Link></li>
                    <li className={`heading-1 heading ${active==='MyItems' ? "active" : ""}`} onClick={() => setToggleMenu(false)}><Link to="/something" onClick={() =>setActive('/something')}>My Items</Link></li>
                    <li className={`heading-1 heading ${active==='Following' ? "active" : ""}`} onClick={() => setToggleMenu(false)}><Link to="/following"onClick={() =>setActive('/following')}>Following</Link></li>
                  </ul>
                  <div className="divider"></div>
                  <div className="app__navbar-smallscreen_buttons">
                    <Button type={'filled'} text='Create'/>
                    <Button width={146} height={39} text='Connect'/>
                  </div>
                </div>
              )}
            </div>
        </div>
        <div className="divider"></div>

    </nav>
  )
}

export default Navbar