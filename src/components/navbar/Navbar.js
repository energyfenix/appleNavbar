import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
        <Link>Store</Link>
        <Link to="/">Mac</Link>
        <Link to="/ipad">Ipad</Link>
        <Link to="/iphone">Iphone</Link>
        <Link to="/watch">Watch</Link>
        <Link to="/airpod">AirPods</Link>
        <Link>TV & Home</Link>
        <Link>Only on apple</Link>
        <Link>Accessories</Link>
        <Link>Support</Link>
    </div>
  )
}

export default Navbar