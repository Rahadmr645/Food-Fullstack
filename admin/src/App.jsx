import react from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/sidebar'
import { Routes,Route } from 'react-router-dom'
import Add from './pages/add/Add'
import List from './pages/list/List'
import Order from './pages/orders/Order'
import { ToastContainer } from 'react-toastify'
function App() {

  const url = 'http://localhost:4420';

  return (
    <>
    <ToastContainer/>
    <div>
     <Navbar/>
     <hr />
     <div className="app-content">
      <Sidebar/>
      {/* route section */}
      <Routes>
        <Route path='/add' element={<Add url={url} />} />
        <Route path='/list' element={<List url={url}  />} />
        <Route path='/order' element={<Order url={url}  />} />
      </Routes>
     </div>
    </div>
    </>
  )
}

export default App
