import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import { Routes, Route } from 'react-router-dom'
import Carts from './carts/Carts'
import Login from './Login/Login'
import Checkout from './Chackout/Checkout'

function App() {

  const [showlogin, setShowlogin] = useState(false);
  return (
    <>
      {showlogin ? <Login setShowlogin={setShowlogin} /> : <></>}
      <Navbar setShowlogin={setShowlogin} />
      {/* Router section */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carts' element={<Carts />} />
       <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
