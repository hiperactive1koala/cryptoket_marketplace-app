import React, {useState} from 'react'

import Nft from '../../Images/original_nft.png'
import Button from '../Button/Button'
import IG from '../../Images/instagram.svg'
import TW from '../../Images/twitter.svg'
import TL from '../../Images/telegram.svg'
import './Checkout.css'

const Checkout = ({isVisible = false}) => {
    const [complete, setComplete] = useState(false)

    if(isVisible){
        return (
      
            <div className="app__item-checkout-container">
                <div className="app__item-checkout">
                    {complete? <h1 className="heading-2">Payment Successful</h1> :<h1 className="heading-2">Check Out</h1>}
                    
                    <div className="divider"></div>
                    <div className="app__item-checkout_content">
                        {complete ? <div></div> : <div className="app__item-checkout_content-header">
                            <p className="semibold_paragraph-1">Item</p>
                            <p className="semibold_paragraph-1">Subtotal</p>
                        </div>}
                        { complete? <div className="app__item-checkout_content-completed-middle_item"> <img src={Nft} alt="" /> </div>:
                                    <div className="app__item-checkout_content-middle">
                                       <div className="app__item-checkout_content-middle_item">
                                           <img src={Nft} alt="" />
                                           <div>
                                               <p className="semibold_paragraph-2">Mia Ayana</p>
                                               <p className="regular_paragraph-2">Abstact Smoke Red Blue</p>
                                           </div>
                                       </div>
                                       <div className="app__item-checkout_content-middle_price">
                                           <p className="regular_paragraph-1">4.5 <span className="semibold_paragraph-1">ETH</span></p>
                                       </div>
                                    </div>
                                        }

                        { complete ? <div className='complete_paragraph'><p className="regular_paragraph-1">You successfully purchased <span className="semibold_paragraph-1">Abstact Smoke Red Blue</span> from <span className="semibold_paragraph-1">Mia Ayana</span></p></div>:
                                        <div className="app__item-checkout_content-footer">
                                            <p className="semibold_paragraph-1">Total</p>
                                            <p className="regular_paragraph-1">4.5 <span className="semibold_paragraph-1">ETH</span></p>
                                        </div>
                                        }
                    </div>
                    <div className="divider"></div>
                    {complete? <div className="app__item-checkout_share">
                                        <h1 className="heading-3">Share</h1>
                                        <div className="app__item-checkout_share-social">
                                            <img src={IG} alt="" />
                                            <img src={TW} alt="" />
                                            <img src={TL} alt="" />
                                        </div>
                                </div>:
                                 <div className="app__item-checkout_buttons">
                                    <Button type={'filled'} text='Checkout' width={140} height={40}  onPress={()=>setComplete(true)} />
                                    <Button text='Cancel' width={140} height={40} onPress={()=> window.open('/item', "_self")} />
                                </div>
                                    }
                </div>
                </div>
          )
    }else{
        return( <div></div> )
    }

}

export default Checkout