import React from 'react';

const Slice = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Slice the array to get elements from index 2 to 5
  const slicedNumbers = numbers.slice(2, 7); // [3, 4, 5, 6]
  
  return (
    <div>
      <h1>Original Array:</h1>
      <p>{numbers.join(', ')}</p>
      <h1>Sliced Array:</h1>
      <p>{slicedNumbers.join(', ')}</p>
    </div>
  );
};

export default Slice;
