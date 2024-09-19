import React from 'react'
import Cars from './Landingpages/Cars'
import Bikes from './Landingpages/Bikes'
import Contactpage from './Contact/Contactpage'
import Navabar from './Navbar/Navabar'
import { Route, Routes } from 'react-router-dom'
import Navagationbar from './Navbar/Navagationbar'
import Homepage from './Home/Homepage'



const Mainhomepage = () => {
  return (
    <div>
      <h3></h3>
        <Navagationbar/>
        <Routes>
          <Route path='/home' element = {<Homepage/>}/>
          <Route path='/cars' element = {<Cars/>}/>
          <Route path='/bikes' element = {<Bikes/>}/>
          <Route path='/contact' element = {<Contactpage/>}/>
        </Routes>  

        
    </div>
  )
}

export default Mainhomepage
