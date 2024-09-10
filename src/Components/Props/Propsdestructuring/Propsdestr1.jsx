import React from 'react'
import Propsdestr2 from './Propsdestr2'
import Propsdestr3 from './Propsdestr3'

const Propsdestr1 = () => {

const myCar={
    company:"Maruthi Suzuki",
    model:"Brezza",
    color:"white",
    year:"2021"
}
const myBike={
    company:"Suzuki",
    model:"Access 125",
    color:"Blue",
    year:"2019"
}

  return (
    <div>
      <Propsdestr2 car = {myCar}/>
      <Propsdestr3 bike = {myBike}/>
    </div>
  )
}

export default Propsdestr1
