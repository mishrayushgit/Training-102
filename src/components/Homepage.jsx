import React from 'react'
import Navigatebtn from './navigatebtn'
const Homepage = () => {
  return (
    <div className="p-6 ">
        <h1 className="text-2xl font-bold mb-4">Daily Diary</h1>
        <div className='flex flex-wrap gap-2'>
        <Navigatebtn day = "Day 1" component = {"./Day1"} />
        <Navigatebtn day = "Day 2" component = {"./Day2"} />
        </div>
      </div>
  )
}

export default Homepage