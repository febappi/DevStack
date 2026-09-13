import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Technologies from './components/Technologies.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8">
      <Navbar></Navbar>
      <Hero></Hero>
      <Technologies></Technologies>
      <Footer></Footer>
      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  )
}

export default App
