import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const Home = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div data-testid="home-div">
      <h1>Home Page</h1>
      <ChildComponent count={count} setCount={setCount} />
    </div>
  )
}

export default Home
