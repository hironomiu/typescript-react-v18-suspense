import React from 'react'

type Props = {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

const ChildComponent: React.FC<Props> = ({ count, setCount }) => {
  const handleIncrement = () => {
    setCount((_prev: number) => ++_prev)
  }
  const handleDecrement = () => {
    setCount((_prev: number) => --_prev)
  }
  return (
    <div>
      <h1>ChildComponent</h1>
      <button onClick={handleIncrement}>+</button>
      {count}
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default ChildComponent
