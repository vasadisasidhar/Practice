import React, { useState , useEffect} from 'react'

const Usestates = () => {

    const [count,setCount] = useState(0)
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Dec</button>
      <Example/>
    </div>
  )
}

export default Usestates




function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This code runs after every render
    console.log('Component rendered or count changed:', count);

    // Cleanup function (optional)
    return () => {
      console.log('Cleanup before the next effect or component unmount');
    };
  }, [count]); // Dependency array; effect runs when `count` changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}



