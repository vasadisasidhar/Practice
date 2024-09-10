import React from 'react';

function Blur() {
  // Event handler for the blur event
  const handleBlur = (event) => {
    console.log('Input field lost focus:', event.target.name);
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="Enter your username"
        onBlur={handleBlur} // Attach the blur event handler
      />
    </div>
  );
}

export default Blur;
