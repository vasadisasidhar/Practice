import React, { useState} from 'react';

const carData = []

const Mainpage = () => {
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
/*------------------------------Start editing a car----------------------------------*/
const startEditing = (car) => {
    setEditRowId(car.id);
    setFormData(car);
};


 /*------------------------------Handle form input changes----------------------------------*/
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    
/*------------------------------Update car data----------------------------------*/
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

/*------------------------------Add new car----------------------------------*/
    const handleAdd = () => {
        const maxSerial = cars.length > 0 ? Math.max(...cars.map(car => car.id)) : 0;
        const newSerialNumber = maxSerial + 1;
        const newCar = {
            id: newSerialNumber,
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
/*------------------------------Delete car and reassign IDs----------------------------------*/
    const handleDelete = (idToDelete) => {
        const filteredCars = cars.filter(car => car.id !== idToDelete);
        const updatedCars = filteredCars.map((car, index) => ({
            ...car,
            id: index + 1 
        }));
        setCars(updatedCars);
    };
    
/*---------------------------------Table Data Displaying----------------------------------*/
  return (
    <div>
        <div className="header-section">
            <h1>Car Data Entery Form</h1>
        </div>
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
                <button type="button" className="btn btn-primary"onClick={editRowId ? handleUpdate:handleAdd}>
                {editRowId ? 'Update Car Details' : 'Add New Car'}</button>
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
                        <button type="button" class="btn btn-primary"onClick={() => startEditing(car)}>Edit</button>
                        <button type="button"className="btn btn-danger"onClick={() => handleDelete(car.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
    
  );
}

export default Mainpage;
