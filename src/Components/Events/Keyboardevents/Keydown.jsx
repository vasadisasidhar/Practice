import React, { useState } from 'react';

const Keydown = () => {
    const [key, setKey] = useState('Key pressed:');

    const handleKeyDown = (event) => {
        setKey(`Key pressed: ${event.key}`);
    };

    return (
        <div>
            <h1>{key}</h1>
            <input type="text" placeholder="Press any key" onKeyDown={handleKeyDown}
                
            />
        </div>
    );
};

export default Keydown;
