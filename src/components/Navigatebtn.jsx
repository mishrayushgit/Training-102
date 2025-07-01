import React from 'react'
import { Link } from 'react-router-dom'
const Navigatebtn = ({day,component}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
          <Link
            to={component}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          >
            {day}
          </Link>
    </div>
  )
}

export default Navigatebtn