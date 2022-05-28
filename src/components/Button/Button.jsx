import React from 'react'

import './Button.css'

const Button = ({type, text, width = 109, height = 40, className='', paddingLR, onPress}) => {
  return (
    type ==='filled' ? 
    <button className={`${className} custom_gradient-button button`} style={{width:width, height:height, paddingLeft:paddingLR, paddingRight:paddingLR}} onClick={onPress}>{text}</button> :
    <button className={`${className} custom_border-gradient-color button`} style={{width:width, height:height, paddingLeft:paddingLR, paddingRight:paddingLR}} onClick={onPress}>{text}</button>
  )
}

export default Button