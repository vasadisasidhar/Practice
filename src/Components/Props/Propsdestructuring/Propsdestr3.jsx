import React from 'react'


const Propsdestr3 = (props) => {
const {company,model,color,year} = props.bike
  return (
    <div>
      <h1>Bike Details</h1>
      <h3>Car Company Name:{company}</h3>
      <h3>Car Name:{model}</h3>
      <h3>Car Color:{color}</h3>
      <h3>Car year:{year}</h3>
    </div>
  )
}

export default Propsdestr3
