import React from 'react'
import './Navabar.css';
import { Link } from 'react-router-dom'

const Navabar = () => {
  return (
    <div className="navaSection">
      <ul>
      <Link to = "/home"><button type="button" class="btn btn-primary">Home</button></Link>
      <Link to = "/cars"><button type="button" class="btn btn-primary">Cars</button></Link>
      <Link to = "/bikes"><button type="button" class="btn btn-primary">Bikes</button></Link>
      <Link to = "/contact"><button type="button" class="btn btn-primary">Contact-Us</button></Link>
      </ul> 
    </div>
  )
}

export default Navabar
