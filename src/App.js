import React, { useState, useEffect } from 'react'
import { Loader } from './components/Loader'
import { Home } from './components/Home'
const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 6000)

    return () => clearTimeout(timeout)
  }, [])

  return (
      <div>
        {loading ? <Loader/> : <Home/>}
      </div>
  )
}

export default App
