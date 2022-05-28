import React from 'react'

import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import DropArea from '../../components/Dropzone/Dropzone'
import './Create.css'

const Create = () => {
  return (
    <div className="app__create">
        <div className="app__create-container">
            <h1 className="heading-1">Create new Item</h1>
            <div className="app__create-container_upload-container">
                <div className="app__create-container_upload-container_upload-area">
                    <div className="app__createcontainer_upload-container_dropdown-area">
                        <h1 className="heading-2">Upload File</h1>
                        <DropArea/>
                    </div>
                    <div className="app__create-container_upload-container_name">
                        <p className="heading-2">Name</p>
                        <input type="text" name="item-name" id="" placeholder='Item Name' />
                    </div>
                    <div className="app__create-container_upload-container_description">
                        <p className="heading-2">Description</p>
                        <textarea name="item-description" id="textarea" placeholder='Decription of your item'></textarea>
                    </div>
                    <div className="app__create-container_upload-container_price">
                        <p className="heading-2">Price</p>
                        <div className="app__create-container_input-div">
                            <input type="number" name="price" id="price" placeholder='Enter Price'/>
                            <select>
                                <option selected value="ETH">ETH</option>
                                <option value="BTC">BTC</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>
            <div className="app__create-container_buttons">

                <Button type={'filled'} text={'Create Item'} width={145} height={45}/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Create