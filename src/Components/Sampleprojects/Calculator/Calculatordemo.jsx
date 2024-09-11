import React, { useState } from 'react';
import './Calculator.css'; 

const buttons = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8,9, '*', 0, '.','CE','/'];
const Calculatordemo = () => {
    const [input, setInput] = useState('');
    const handleButtonClick = (value) => {
        setInput(prev => prev + value);
    };

    const handleResultClick = () => {
        try {
            setInput(eval(input));
        } catch {
            setInput('Error');
        }
    };
    const handleClearClick = () => {
        setInput('');
    };

    return (
        <div className="calculator">
            <h1>Calculator</h1>
            <input type="text"className="input"value={input}onChange={(e) => setInput(e.target.value)}readOnly/>
            <div className="buttons">
                {buttons.map((e) => (
                    <button className="button" onClick={() => handleButtonClick(e)}>{e}</button>
                ))}
                <button className='button clear-button' onClick={handleClearClick}>C</button>
                <button className="button result-button" onClick={handleResultClick}>=</button>
            </div>
        </div>
    );
};

export default Calculatordemo;
