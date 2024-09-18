import React from 'react'

const Spreadoperator = () => {

    const sweet =['Kesari','Gulab Jamun','Rasmalai']
    const hot =['pav','chat','pani puri']
    const fruits =['Apple', 'Banana','orange']
    
    const snakes = [...sweet,...hot,...fruits]

    const num1 = {a:1,b:2,c:3}
    const num2 = {d:4,e:5,f:6}

    const num ={...num1,...num2}
    console.log(num)
    const numbers = Object.entries(num);
    
  return (
    <div>
      {snakes.map((items)=>(
       <h3>{items}</h3>
      ))}
      {numbers.map((number)=>(
        <h1>{number}</h1>
      ))}
    </div>
  )
}

export default Spreadoperator
