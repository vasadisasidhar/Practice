import React from 'react'

const Propimage2 = ({title,image,description}) => {
  return (
    <div>
        <li>
            <h1>{title}</h1>
            <img src={image}/>
            <h1>{description}</h1>
        </li>   
    </div>
  )
}

export default Propimage2
