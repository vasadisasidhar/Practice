import React, { useState } from 'react';
import './Calculator.css'; 

const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const operators = ['+', '-', '*', '/']

const Calculatordemo = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        setInput(prev => prev + value);
    };

    const handleResultClick = () => {
        try {
            setResult(eval(input));
        } catch {
            setResult('Error');
        }
    };

    const handleClearClick = () => {
        setInput('');
        setResult('');
    };

    return (
        <div className="calculator">
            <h1>Calculator</h1>
            <input type="text"className="input"value={input}onChange={(e) => setInput(e.target.value)}/>
            <h2 className="result">Result: {result}</h2>

            <div className="buttons">
            {numbers.map(num => (
                <button key={num} className="button" onClick={() => handleButtonClick(num)}>{num}</button>
                    ))}

            {operators.map(op => (
                <button key={op} className="button" onClick={() => handleButtonClick(op)}>{op}</button>
                ))}
                
                <button className="button" onClick={handleResultClick}>=</button>                
                <button className="button clear-button" onClick={handleClearClick}>Clear</button>
            </div>
        </div>
    );
};

export default Calculatordemo;
