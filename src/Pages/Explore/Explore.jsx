import React from 'react'

import Banner from '../../components/Banner/Banner'
import Bids from '../../components/HotBid/Bids'
import TopSellers from '../../components/TopSellers/TopSellers'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import './Explore.css'
const Explore = () => {
  
  return (
    <div className='app__explore section__padding'>
      <Banner/>
      <TopSellers/>
      <Bids
      searchbar={false}/>
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

export default Explore