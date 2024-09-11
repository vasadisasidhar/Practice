import React, { useState } from 'react';


const Todolist = () => {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const changeHandler = (e) => {
        setTask(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (task.trim() === '') return; 
        const newTodo = [...todos, task];
        setTodos(newTodo);
        setTask('');
    };

    const deleteHandler = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="center">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">TO-DO Application Form</h5>
                    
                    <form onSubmit={submitHandler}>
                        <input type="text"name="task"value={task}onChange={changeHandler}
                                                        placeholder="Enter your task..."/>
                        <input type="submit"value="Add"name="Add"/>
                    </form>
                </div>

                <div className="todo-list">
                    {todos.map((item, index) => (
                        <div key={index} className="todo-item">
                            <h5>{item}</h5>
                            <button
                                className="delete-button"onClick={() => deleteHandler(index)}>Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Todolist;
