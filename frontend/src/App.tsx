import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LanguageToggle from './components/LanguageToggle'
import { LanguageProvider } from './context/LanguageContext'
import PersonalInfo from './components/PersonalInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LanguageProvider>
      <LanguageToggle />
      <PersonalInfo
        name="Gene Fang"
        dob="1990/01/01"
        region="Kobe"
        phone="090-xxxx-xxxx"
        email="gene.fang@example.com"
      />
      {/* other components */}
    </LanguageProvider>
    </>
  )
}

export default App
