import React, { useState } from 'react';

const Mainpage = ({ carData }) => {
    const [cars, setCars] = useState(carData);
    const [editRowId, setEditRowId] = useState(null);
    const [formData, setFormData] = useState({
        id: '',
        company: '',
        model: '',
        year: '',
        color: '',
        type: ''
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Start editing a car
    const startEditing = (car) => {
        setEditRowId(car.id);
        setFormData(car);
    };

    // Update car data
    const handleUpdate = () => {
        setCars(cars.map(car =>
            car.id === editRowId ? formData : car
        ));
        setEditRowId(null);
        setFormData({
            id: '',
            company: '',
            model: '',
            year: '',
            color: '',
            type: ''
        });
    };
// Add new car
    const handleAdd = () => {
        const newCar = {
            id: Date.now(), // Generate a unique id
            company: formData.company,
            model: formData.model,
            year: formData.year,
            color: formData.color,
            type: formData.type
        };
        setCars([...cars, newCar]);
        setFormData({
            id: '',
            company: '',
            model: '',
            year: '',
            color: '',
            type: ''
        });
    };
  return (
    <table className="nested-table">
        <thead>
            <tr className="centered">
                <th>S.NO</th>
                <th>Company</th>
                <th>Model</th>
                <th>Year</th>
                <th>Color</th>
                <th>Type</th>
                <th>Action</th>
            </tr>
            <tr>
                <td><input type="text"name="id"value={formData.id}placeholder="S.No"/></td>  
                <td><input type="text"name="company"value={formData.company}onChange={handleChange}placeholder="Company"/></td>
                <td><input type="text"name="model"value={formData.model}onChange={handleChange}placeholder="Model"/></td> 
                <td><input type="text"name="year"value={formData.year}onChange={handleChange}placeholder="Year"/></td>
                <td><input type="text"name="color"value={formData.color}onChange={handleChange}placeholder="Color"/></td>
                <td><input type="text"name="type"value={formData.type}onChange={handleChange}placeholder="Type"/></td>
                <td className="centered-buttons">
                <button type="button"className="btn btn-primary"onClick={editRowId ? handleUpdate : handleAdd}>
                    {editRowId ? 'Update Car Details' : 'Add Car'}</button>
                </td>
            </tr>
        </thead>

        <tbody>
            {cars.map((car) => (
                <tr key={car.id}>
                    <td>{car.id}</td>
                    <td>{car.company}</td>
                    <td>{car.model}</td>
                    <td>{car.year}</td>
                    <td>{car.color}</td>
                    <td>{car.type}</td>
                    <td className="centered-buttons">
    <button type="button"className="btn btn-primary"onClick={() => startEditing(car)}>Edit</button>
    <button type="button"className="btn btn-danger"onClick={() => setCars(cars.filter(c => c.id !== car.id))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
        
    );
};

export default Mainpage;
