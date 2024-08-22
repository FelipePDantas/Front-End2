import React from 'react'

const Subtraction = (props) => {
  return (
    <div>
         <h1>o resultado de {props.num1} - {props.num2} é : 
         {props.num1-props.num2}</h1>
    </div>
  )
}

export default Subtraction