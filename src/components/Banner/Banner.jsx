import React from 'react'

import './Banner.css'
import Pink_Letter from '../../Images/Pink_Letter.svg'
const Banner = () => {
  return (
    <div className='app__banner-box'>
        <img src={Pink_Letter} alt="banner" />
    </div>
  )
}

export default Banner