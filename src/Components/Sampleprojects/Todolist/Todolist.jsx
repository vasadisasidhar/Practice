import React, { useState } from 'react'

const Todolist = () => {

    const [task,setTask] = useState('')
    const [todos,setTodos] = useState([])

    const changeHandler =(e)=>{
        setTask(e.target.value)
    }

    const submitHandler =(e)=>{
        e.preventDefault()
        const newTodo = [...todos,task]
        setTodos(newTodo)
        setTask('')
    }



  return (
   <center>
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">TO-DO Application Form</h5>
            <form onSubmit={submitHandler}>
                <input type='text' name='task' value={task} onChange={changeHandler}/>
                <input type='submit' value="Add" name="Add"/>
            </form>
        </div>
    </div>
   </center>
  )
}

export default Todolist
