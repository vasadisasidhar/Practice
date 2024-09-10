import React, { useState } from 'react';

const Mouseover = () => {
    const [message, setMessage] = useState('');

    const handleMouseOver = () => {
        setMessage('Mouse is over the button!');
    };

    const handleMouseOut = () => {
        setMessage('Mouse left the button!');
    };

    return (
        <div>
            <h1>{message}</h1>
            <div>
                <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Over the Pointer on me</button>
            </div>
        </div>
    );
};

export default Mouseover;
