import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../Images/Dark.svg'
import Instagram from '../../Images/instagram.svg'
import Twitter from '../../Images/twitter.svg'
import Telegram from '../../Images/telegram.svg'
import Discord from '../../Images/discord.svg'
import Button from '../Button/Button'
import './Footer.css'
const Footer = () => {
  return (
    <div className='app__footer section__padding'>
        <div className="divider"></div>
        <div className="app__footer_container">
            <div className="app__footer_container-col app__footer_container-col_wide">
                <img src={Logo} alt="logo" />
                <p className="semibold_paragraph-1">Get the lastes Updates</p>
                <div className="app__footer-contact">
                    <input type="email" name="Email" id="email" placeholder='Your Email' />
                    <Button
                     type={'filled'}
                     text='Email Me!'
                     width={118}
                     className='semibold_paragraph-1'
                     paddingLR={24}/>

                </div>
            </div>
            <div className="app__footer_container-col app__footer_container-col_slim">
                <h1 className="heading-3">CryptoKet</h1>
                <Link to="/" >Explore</Link>
                <Link to="/" >How it Works</Link>
                <Link to="/" >Contact Us</Link>
            </div>
            <div className="app__footer_container-col app__footer_container-col_slim col-3">
                <h1 className="heading-3">Support</h1>
                <Link className='regular_paragraph-1' to="/" >Help center</Link>
                <Link className='regular_paragraph-1'  to="/" >Terms of service</Link>
                <Link className='regular_paragraph-1'  to="/" >Legal</Link>
                <Link className='regular_paragraph-1'  to="/" >Privacy policy</Link>

            </div>
        </div>
        <div className="app__footer_social">
            <h1 className="heading-1">CrpytoKet, Inc. All Rights Reserved</h1>
            <div className="app__footer_social-icons">
                <img src={Instagram} alt="" />
                <img src={Twitter} alt="" />
                <img src={Telegram} alt="" />
                <img src={Discord} alt="" />
            </div>
        </div>
        <div className="divider"></div>
    </div>
  )
}

export default Footer