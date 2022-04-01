import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex bg-black text-gray-300 h-16 items-center w-screen">
      <nav className="mx-10 flex ">
        <Link to="/" className="mx-2">
          <p data-testid="home-link">Home</p>
        </Link>
        <Link to="/posts" className="mx-2">
          <p data-testid="posts-link">Posts</p>
        </Link>
        <Link to="/users" className="mx-2">
          <p data-testid="users-link">Users</p>
        </Link>
      </nav>
    </header>
  )
}

export default Header
