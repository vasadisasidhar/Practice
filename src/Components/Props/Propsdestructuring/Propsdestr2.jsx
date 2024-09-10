import React from 'react'


const Propsdestr2 = (props) => {
const {company,model,color,year} = props.car
  return (
    <div>
      <h1>Car Details</h1>
      <h3>Car Company Name:{company}</h3>
      <h3>Car Name:{model}</h3>
      <h3>Car Color:{color}</h3>
      <h3>Car year:{year}</h3>
    </div>
  )
}

export default Propsdestr2
