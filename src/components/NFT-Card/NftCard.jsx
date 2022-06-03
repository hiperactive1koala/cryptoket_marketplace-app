import React from 'react'
import { Link } from 'react-router-dom'

import './NftCard.css'
import Heart from '../../Images/Heart.svg'
import Nft from '../../Images/nft_board.png'

const NftCard = ({photo = Nft, name = 'Abstact Smoke Red Blue', price='4.50', likeCount='92' }) => {
  return (
    <Link to="/item">
    <div className='app__nft-card'>
        <div className="app__nft-card_wraper">
            <img src={photo} alt="" />
            <div className="app__nft-card_container">
                <h1 className="semibold_paragraph-2">{name}</h1>
                <div className="app__nft-card_content">
                    <p className="regular_paragraph-3"><span className='semibold_paragraph-3'>{price}</span> ETH</p>
                    <div className="nft-card_heart">
                        <img src={Heart} alt="" />
                        <p className="regular_paragraph-3">{likeCount}</p>
                    </div>
                </div>
            </div>
        </div>      
    </div>
    </Link>
  )
}

export default NftCard