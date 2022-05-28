import React from 'react'

import NftCard from '../NFT-Card/NftCard'
import './Bids.css'

import useWindowSize from '../windowSize/windowSIze'
const Bids = ({searchbar = false}) => {
  const wide = useWindowSize(510);
  return (
    <div className='app__bids section__padding'>
      {searchbar ===true && wide ===true ?
        <div className="app__bids-searchbar">
          <input name='nft' placeholder='Search Item Here' />
          <select>
            <option value="Price Descending">Price Descending</option>
            <option value="Price Ascending">Price Ascending</option>
            <option selected value="Recently Listed">Recently Listed</option>
            <option value="Likes">Likes</option>
          </select>
        </div> : searchbar===true && wide === false ?
        <h1 className="heading-3">Items</h1> : searchbar === false && wide ===true ?
          <h1 className="heading-1">Hot Bids</h1>:
          <h1 className="heading-3">Hot Bids</h1>
      }
            <div className="app__bids-gallery">
                <NftCard/>
                <NftCard/>
                <NftCard/>
                <NftCard/>
                <NftCard/>
                <NftCard/>
                <NftCard/>
                <NftCard/>
            </div>
        
    </div>
  )
}

export default Bids