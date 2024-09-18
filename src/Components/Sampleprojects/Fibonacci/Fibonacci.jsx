import React, { useState } from 'react';

const Fibonacci = () => {
  const [numTerms, setNumTerms] = useState(0);
  const [sequence, setSequence] = useState([]);

  const generateFibonacci = (n) => {
    if (n <= 0) return [];
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
  };

  const handleGenerate = () => {
    setSequence(generateFibonacci(numTerms));
  };

  return (
    <div>
      <h2>Fibonacci Sequence Generator</h2>
      <input
        type="number"value={numTerms}onChange={(e) => setNumTerms(Number(e.target.value))}min="1"/>
      <button onClick={handleGenerate}>Generate</button>
      <ul>
        {sequence.map((num) => (
          <li >{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fibonacci;
