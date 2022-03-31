import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
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
