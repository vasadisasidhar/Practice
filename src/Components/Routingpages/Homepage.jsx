import React from 'react'
import Firstpage from './Firstpage'
import Secondpage from './Secondpage'
import Thirdpage from './Thirdpage'
import Fourthpage from './Fourthpage'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path='/1' element = {<Firstpage/>}/>
        <Route path='/2' element = {<Secondpage/>}/>
        <Route path='/3' element = {<Thirdpage/>}/>
        <Route path='/4' element = {<Fourthpage/>}/> 
        </Routes>
         
    </div>
  )
}

export default Homepage
