import React, { useState } from 'react'
import { BtnQuantidade } from './Buttons.styles'

const ButtonQuantidade = () => {
    const[quantidade , setQuantidade] = useState(
        cartItems.reduce((acc , itemId)=>{
            acc[itemId] = 1
        }, {})
    )
    const aumentar = (itemId) => {
        setQuantidade((prevQuantidade)=>({
          ...prevQuantidade,
          [itemId]: prevQuantidade[itemId] + 1
        }))
    }

    const diminuir = (itemId) => {
        setQuantidade((prevQuantidade)=>({
          ...prevQuantidade,
          [itemId]: prevQuantidade[itemId] - 1
        }))
    }


  return (
    <>
        <BtnQuantidade onClick={() => aumentar(itemId)} >+</BtnQuantidade>
        <BtnQuantidade onClick={() => diminuir(itemId)}>-</BtnQuantidade>
    
    </>
    
  )
}

export default ButtonQuantidad