import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Persona from './componentes/Persona'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Persona
        nombre='Juan'
        pais='Colombia'
        edad='30'
        avatar='https://avatars.githubusercontent.com/u/134021260?v=4'
      >Hola</Persona>

      <Persona
        nombre='Brian'
        pais='Colombia'
        edad='33'
        avatar='https://avatars.githubusercontent.com/u/119024625?v=4'
      >Hola</Persona>

      <Persona
        nombre='Casseli'
        pais='Peru'
        edad='30'
        avatar='https://avatars.githubusercontent.com/u/122756933?v=4'
      >Hola</Persona>
    </>
  )
}

export default App
