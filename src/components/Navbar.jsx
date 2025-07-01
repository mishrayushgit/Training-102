import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <nav className="flex items-center px-6 py-4 bg-gray-900 text-white">

      <Link to="/" className="text-2xl font-bold cursor-pointer">Home</Link>

      
    </nav>
  )
}

export default Navbar