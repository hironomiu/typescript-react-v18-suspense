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
    <div className="flex flex-col justify-center items-center">
      <h1>ChildComponent</h1>
      <div>
        <button onClick={handleIncrement} className="text-xl">
          +
        </button>
        <span className="mx-4">{count}</span>
        <button onClick={handleDecrement} className="text-xl">
          -
        </button>
      </div>
    </div>
  )
}

export default ChildComponent
