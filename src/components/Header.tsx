import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex bg-black text-gray-300 h-16 items-center w-screen">
      <nav className="mx-10 flex ">
        <Link to="/" className="mx-4">
          <p>Home</p>
        </Link>
        <Link to="/tab-a">
          <p>TabA</p>
        </Link>
      </nav>
    </header>
  )
}

export default Header
