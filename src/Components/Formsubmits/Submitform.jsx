import React, { useState } from 'react'

const Submitform = () => {

    const [username, setUsername]=useState()
    const [name,setName]=useState()

    const getUserName = (e)=>{
        setUsername(e.target.value)
    }

    const submitUsername = (e) =>{
        e.preventDefault()
        setName(username)
    }

  return (
    
    <section className="formSection">
        <h2>Hello,{name}</h2>

        <div className="inputDiv">
         <form onSubmit={submitUsername}>
            <input type='text'placeholder='Enter Your Name...'onChange={getUserName} />
            <button type='submit'>SUBMIT</button>
         </form>
            
        </div>
    </section>
  )
}

export default Submitform
