import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Button Hub</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <Link
            key={i}
            to={`/component${i + 1}`}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          >
            Go to Component {i + 1}
          </Link>
        ))}
      </div>
      </div>
    </>
  )
}

export default App
