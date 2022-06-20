import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const Home = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div
      data-testid="home-div"
      className="flex flex-col justify-center items-center"
    >
      <h1 className="text-2xl">Home Page</h1>
      <ChildComponent count={count} setCount={setCount} />
    </div>
  )
}

export default Home
