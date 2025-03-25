import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountDownLightSwitch from './CountDownLightSwitch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CountDownLightSwitch toggle={true}/>
    </>
  )
}

export default App
