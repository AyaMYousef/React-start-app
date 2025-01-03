import { useState } from 'react'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import ContactInfo from './components/ContactInfo/ContactInfo'
import Footer from './components/Footer/footer'
import './App.css'






function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <ContactInfo />
      <Footer/>
    </>
  )
}

export default App
