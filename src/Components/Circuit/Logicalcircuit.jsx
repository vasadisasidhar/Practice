import React, { useState } from 'react'

const Logicalcircuit = () => {


    const [game,setGame] = useState(true)

    const First =()=>{
        return(
            <div>
                <h2>Welcome to Vizianagaram</h2>
            </div>
        )
    }
   
  return (
    <div>
      {game && <First/>}
    </div>
  )
}

export default Logicalcircuit
