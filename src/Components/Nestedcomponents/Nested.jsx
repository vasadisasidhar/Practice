import React from 'react'
import Adding from './Adding'
import Substrate from './Substrate'

const Nested = () => {
  return (
    <div>
      <h1>Adding of two numbers</h1>
      <Adding/>
      <Substrate/>
    </div>
  )
}

export default Nested
