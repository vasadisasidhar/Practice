import React, { useState } from 'react';

const Dataposting = () => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [dept, setDept] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const empDetails = { name, role, email, dept };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !role || !email || !dept) {
            setError('All fields are required.');
            return;
        }else{
            console.log(empDetails)
        }

        setError(null); // Clear previous errors
        setSuccess(null); // Clear previous success message

        try {
            const response = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(empDetails)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setSuccess('Data submitted successfully!');
            // Clear form fields
            setName('');
            setRole('');
            setEmail('');
            setDept('');
        } catch (error) {
            setError(`Submission failed: ${error.message}`);
        }
    };

    return (
        <div className="empForm">
            <div className="section">
                <form onSubmit={handleSubmit}>
                    <label>Employee Name</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />

                    <label>Employee Role</label>
                    <input type='text' value={role} onChange={(e) => setRole(e.target.value)} />

                    <label>Employee Email</label>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label>Employee Department</label>
                    <input type='text' value={dept} onChange={(e) => setDept(e.target.value)} />

                    <button type='submit'>SUBMIT</button>
                </form>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </div>
        </div>
    );
};

export default Dataposting;
