import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navSection">
        <ul>
            <Link to = "/1"><li>First Page</li></Link>
            
            <Link to = "/2"><li>Secound Page</li></Link>

            <Link to = "/3"><li>Third Page</li></Link>

            <Link to = "/4"><li>Fourth Page</li></Link>
        </ul> 
    </div>
  )
}
export default Navbar
