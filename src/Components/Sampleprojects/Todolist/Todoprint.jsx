import React from 'react'

const Todoprint = (todolist) => {
  return (
    <div>
      {todolist.map((todo,index)=>{
        return(
            <div key={index}>
            <h5>{todo} &nbsp; <button>Delete</button></h5>
            </div>
        )
      })}
    </div>
  )
}

export default Todoprint
