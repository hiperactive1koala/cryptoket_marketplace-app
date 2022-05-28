import React from 'react'
import Card from '../Card/Card';

import './TopSellers.css'
import LeftArrow from '../../Images/left_arrow.svg'
import RightArrow from '../../Images/right_arrow.svg'

import useWindowSize from '../windowSize/windowSIze'

const TopSellers = () => {
    const scrollRef = React.useRef(null);
    const wide = useWindowSize(500);

    const scroll = (direction, length = 202) => {
      const { current } = scrollRef;
  
      if (direction === 'left') {
        current.scrollLeft -= length;
      } else {
        current.scrollLeft += length;
      }
    };

  return (
    <div className='app__top-sellers section__padding'>
        <h1 className='heading-1'>Top Sellers</h1>
        <div className='app__top-sellers_card-container' >
            <div className="app__top-sellers_card" ref={scrollRef}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className="app__top-sellers_arrows">
                <img src={LeftArrow} alt='left arrow' className="top-sellers__arrow-icon" onClick={() => wide? scroll('left', 202) : scroll('left',140)} />
                <img src={RightArrow} alt='right arrow' className="top-sellers__arrow-icon" onClick={() =>wide?  scroll('right', 202) : scroll('right',140)} />
            </div>
        </div>
    </div>
  )
}

export default TopSellers