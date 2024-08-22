import React from 'react'
import Adicao from './components/Adicao'
import Subtraction from './components/Subtraction'
import Multiplication from './components/Multiplication'
import Division from './components/Division'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <Adicao num1={2} num2={3}/>
      <Subtraction num1={2} num2={3}/>
      <Multiplication num1={2} num2={3}/>
      <Division num1={2} num2={3}/>
      <PrecisoEstudar name={"Kotlin"}/>
    </div>
  )
}

export default App
