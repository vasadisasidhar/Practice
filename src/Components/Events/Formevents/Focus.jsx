import React from 'react';

function Focus() {
    const handleFocus = () => {
  };

  return (
    <form>
        <label>
          Name:<input type="text"name="name"onFocus={handleFocus}/>
        </label>
        
        <label>
          Email:<input type="email"name="email"onFocus={handleFocus}/>
        </label>
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Focus;
