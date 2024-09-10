import React, { useState } from 'react';

const Submit = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });

  
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData,[name]: value});
    };

    const handleSubmit = () => { 
        alert(`Submitted: Name = ${formData.name}, Email = ${formData.email}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input type="text"name="name"value={formData.name}onChange={handleChange}placeholder="Enter your name"/>
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email"name="email"value={formData.email}onChange={handleChange}placeholder="Enter your email"/>
                </label>
            </div>
            <button>Submit</button>
        </form>
    );
};

export default Submit;
