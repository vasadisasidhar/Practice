import React, { useEffect, useState } from 'react'

const Screensize = () => {

    const [screensize, setScreensize]=useState({
        width:window.innerWidth,
        height:window.innerHeight
    })

    useEffect(()=>{
        
        const updateScreen=()=>{
            setScreensize({
                width:window.innerWidth,
                height : window.innerHeight
            })
        }

        window.addEventListener('resize',updateScreen)
        updateScreen();
        return ()=> window.removeEventListener('resize',updateScreen)

    },[])

  return (
    <div className="container">
      <h3>Welcome to React</h3>
      <h1>Screen Size example </h1>
      <h3>Resize the window to see the screensize change</h3>
      
      <div className="screen-size">
      <h3>Width:{screensize.width}px</h3>
      <h3>Height:{screensize.height}px</h3>
      </div>
      
    </div>
  )
}

export default Screensize
