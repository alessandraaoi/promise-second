import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='nav'>
    <div className='nav-div'>

        <Link to = '/' className='menu-item'>Fake Store</Link>
        <Link to = '/productos' className='menu-item'>Productos</Link>
        <Link to=  '/carrito' className='menu-item'>🛒</Link>
      
    </div>
    </nav>
  )
}

export default NavBar
