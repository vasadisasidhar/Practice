import React, { useEffect, useState } from 'react'

const Basicusestate = () => {

    const [city,setCity]=useState("Hyderabad")

    useEffect(()=>{
        if(city==="Hyderabad"){
            setCity("Vizianagaram")
        }else{
            setCity("Vizag")
        }
    },[])

    
  return (
    <div>
      <h3>Hi, I live in {city}</h3>
    </div>
  )
}

export default Basicusestate
