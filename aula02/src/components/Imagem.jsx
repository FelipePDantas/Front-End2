import React from 'react'
import Img from '../assets/rst.jpg'

const Imagem = () => {
  return (
    <div>
         <img src='doidera.png' alt="goku"/>
         <img src={Img} alt= "Vegeta" />
    </div>
  )
}

export default Imagem