import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/sidebar';
import { Routes, Route } from 'react-router-dom';
import List from './pages/list/List';
import { ToastContainer } from 'react-toastify';
import Profile from './components/profile/Profile'
import Add from './pages/Add/Add';
import Order from './pages/Orders/Order';
function App() {

  const url = 'http://localhost:4420';

  return (
    <>
      <ToastContainer />
      <div>
        <Navbar />
        <hr />
        <div className="app-content">
          <Sidebar />
          {/* route section */}
          <Routes>
            <Route path='/' element={<Add url={url} />} />
            <Route path='/list' element={<List url={url} />} />
            <Route path='/order' element={<Order url={url} />} />
            <Route path='/profile' element={<Profile />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
