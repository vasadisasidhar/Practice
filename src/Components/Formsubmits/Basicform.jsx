import React, { useState } from 'react'

const Basicform = () => {

    const[username, setUserName]=useState(" ")
    

    const getUserName=(e)=>{
       setUserName(e.target.value) 
    }

    const [newUserDetails, setNewUserDetails] = useState();
    
    const userDetails = (a) => {
        a.preventDefault();
        setNewUserDetails(username);
      };


  return (
    <section className="formsection">
      <h1>Hello,{newUserDetails}</h1>
        <div className="inputssection">
            <form onSubmit={userDetails}>
            <input type ='text' placeholder='Enter Your Name...' onChange={getUserName}/><br></br><br></br>
            <button className="buttonsection" type="submit">Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Basicform
