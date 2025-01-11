
import './App.css'
import Navbar from './components/Navbar'
import Firstsection from './components/Home'
import Secondsection from './components/About'
import History from './components/History'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      <Navbar />
      <Firstsection />
      <Secondsection/>
      <History/>
      <Services/>
      <Pricing/>
      <Faq/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App
