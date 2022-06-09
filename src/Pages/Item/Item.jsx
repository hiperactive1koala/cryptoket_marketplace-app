import React, { useState , useContext } from 'react'

import  {  Context  }  from  "../../Context/Context";

import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import Nft from '../../Images/original_nft.png'
import Heart from '../../Images/white_heart.svg'
import Mia from '../../Images/mia_ayana.png'
import './Item.css'
import Checkout from '../../components/Checkout/Checkout'


const Item = () => {

    const { toggleTrue } =useContext(Context);

    const dummyData={ details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                      offers: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                      history: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                    }
    const [spell, setSpell] = useState("details")
    
    return (
    <div className="app__item">
        <Checkout/>
        <div className="app__item-container">
            <div className="app__item-container_img">
                <img src={Nft} alt="" />
            </div>

            <div className="vertical_divider"></div>

            <div className="app__item-info">
                <div className="app__item-info_header">
                    <div className="app__item-info_header_texts">
                        <h1 className="heading-1">Abstact Smoke Red Blue</h1>
                        <p className='regular_paragraph-2'>FROM <span className="semibold_paragraph-2">4.5 ETH </span> <span className="p_tags-ellips">*</span>  20 of 25 available</p>
                    </div>
                    <div className="app__item-info_likes">
                        <img src={Heart} alt="" />
                        <p className="regular_paragraph-2">92</p>
                    </div>
                </div>
                <div className="app__item_creator">
                    <p className="regular_paragraph-3">Creator</p>
                    <div className="app__item_creator-info">
                        <div className="app__item_creator-info_img">
                            <img src={Mia} alt="" />
                        </div>
                        <p className="semibold_paragraph-2">Mia Ayana</p>
                    </div>
                </div>
                <div className="app__item-carousel">
                    <div className="app__item-carousel_buttons">
                        <button className={` ${spell==='details' ? "app__item_active-button semibold_paragraph-1" : "regular_paragraph-1"}`} onClick={() => setSpell('details')}>Details</button>
                        <button className={` ${spell==='offers' ? "app__item_active-button semibold_paragraph-1" : "regular_paragraph-1"}`} onClick={() => setSpell('offers')}>Offers</button>
                        <button className={` ${spell==='history' ? "app__item_active-button semibold_paragraph-1" : "regular_paragraph-1"}`} onClick={() => setSpell('history')}>History</button>
                    </div>
                    <div className="divider"></div>
                </div>
           
                    <p className="regular_paragraph-1">{dummyData[spell]}</p>
                    <div className="app__item-info_buttons">
                        <Button type={'filled'} text='Buy for 4.5 ETH' height={45} width={200} paddingLR={12} onPress={()=> toggleTrue()} />
                        <Button text='Make Offer' height={45} width={200} paddingLR={22} />
                    </div>
       
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Item