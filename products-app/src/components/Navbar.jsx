import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

  return (
    <div className='navbar'>
      <Link to='/' id='header' ><h1 className='header'>ProductsApp</h1></Link>
    </div>
  )
}