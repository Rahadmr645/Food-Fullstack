import react from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Orders/Order'

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
