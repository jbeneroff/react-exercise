import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

  return (
    <div className='navbar'>
      <Link to='/' className='header' ><h1 id='header'>ProductsApp</h1></Link>
    </div>
  )
}