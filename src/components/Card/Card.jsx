import React from 'react'
  import { Link } from 'react-router-dom'

import './Card.css'
import Mia from '../../Images/mia_ayana.png'
import Tick from '../../Images/green_tick.png'

const Card = ({query = 1, photo = Mia, name='Mia Ayana', money = '5.250',  }) => {
  return (
    <Link to="/user-profile">
    <div className='app__user-card'>
        <div className="app__user-card_queue">{query}</div>
        <div className="app__user-card_container">
            <div className="app__user-card_profile">
                <img className='app__user-card_profile-photo' src={photo} alt="user profile" />
                <img className='app__user-card_profile-tick' src={Tick} alt="confirmed user" />
            </div>
            <h1 className="semibold_paragraph-1">{name}</h1>
            <p className="regular_paragraph-1"><span className='semibold_paragraph-1'>{money}</span> ETH</p>
        </div>
    </div>
    </Link>
  )
}

export default Card