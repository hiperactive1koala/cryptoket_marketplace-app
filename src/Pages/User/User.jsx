import React from 'react'

import HeadPhoto from '../../Images/header.png'
import MiaAyana from '../../Images/mia_ayana.png'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import Bids from '../../components/HotBid/Bids'
import useWindowSize from '../../components/windowSize/windowSIze'

import './User.css'

const User = () => {
    const wide = useWindowSize(768)
  return (
    <div className='app__user-profile'>
        <div className="app__user-profile_header">
            <img src={HeadPhoto} alt="" />
            <div className="app__user-profile_user-info">
                <div className="user-info_circle">
                    <img src={MiaAyana} alt="" />
                </div>
                {wide ? <h1 className="heading-1">Mia Ayana</h1>:
                <h1 className="heading-3">Mia Ayana</h1>}
                
            </div>
        </div>

        <Bids 
        searchbar={true}/>
        <Button
        className='section__padding'
        text='Load More'
        width={300}
        height={40}
      />
        <Footer/>
    </div>
  )
}

export default User