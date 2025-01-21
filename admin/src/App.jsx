import react from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/sidebar'
import { Routes,Route } from 'react-router-dom'
import Add from './pages/add/Add'
import List from './pages/list/List'
import Order from './pages/orders/Order'

function App() {


  return (
    <>
    <div>
     <Navbar/>
     <hr />
     <div className="app-content">
      <Sidebar/>
      {/* route section */}
      <Routes>
        <Route path='/add' element={<Add/>} />
        <Route path='/list' element={<List />} />
        <Route path='/order' element={<Order />} />

      </Routes>

     </div>
    </div>
    </>
  )
}

export default App
