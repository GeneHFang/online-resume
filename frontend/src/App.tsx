import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LanguageToggle from './components/LanguageToggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LanguageToggle/>

    </>
  )
}

export default App
