import React from 'react'
import Navbar from './component/navbar/Navbar'
import "./App.css"
import Sidebar from './component/sidebar/Sidebar'
import Home from './Pages/Home'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import User from './component/user/User'
import UserEdit from './Pages/userEdit/UserEdit'


export default function App() {
  return (
    <Router>
   <Navbar/>
   <div className='container'>
   <Sidebar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/user' element={<User/>}/>
    <Route path='/user/:userId' element={<UserEdit/>}/>
    </Routes>
    
    
   </div>
   
   </Router>
    
  )
}
