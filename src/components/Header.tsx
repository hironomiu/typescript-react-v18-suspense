import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  console.log(nav)
  return (
    <header className="flex justify-between bg-black text-gray-300 h-16 items-center w-screen">
      <div className="ml-10">
        <Link to="/" className="mx-2">
          <p data-testid="home-link">Home</p>
        </Link>
      </div>

      <nav className="hidden mx-10 md:flex justify-between items-center">
        <ul className="flex">
          <li className="ml-2">
            <Link to="/posts" className="mx-2">
              <p data-testid="posts-link">Posts</p>
            </Link>
          </li>
          <li className="ml-2">
            <Link to="/users" className="mx-2">
              <p data-testid="users-link">Users</p>
            </Link>
          </li>
          <li className="ml-2">
            <Link to="/react-query-posts" className="mx-2">
              <p data-testid="react-query-posts-link">ReactQueryPosts</p>
            </Link>
          </li>
          <li className="ml-2">
            <Link to="/react-query-users" className="mx-2">
              <p data-testid="react-query-users-link">ReactQueryUsers</p>
            </Link>
          </li>
          <li className="ml-2">
            <Link to="/normal-fetch-posts" className="mx-2">
              <p data-testid="normal-fetch-posts-link">NormalFetchPosts</p>
            </Link>
          </li>
          <li className="ml-2">
            <Link to="/normal-fetch-users" className="mx-2">
              <p data-testid="normal-fetch-users-link">NormalFetchUsers</p>
            </Link>
          </li>
        </ul>
      </nav>
      <div onClick={handleNav} className="block md:hidden mx-10">
        {nav === true ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      <div
        className={
          nav === true
            ? 'md:hidden fixed left-0 top-0 h-full w-[40%] border-r bg-white ease-in-out duration-500'
            : 'fixed top-0 left-[-100%] duration-700 h-full'
        }
      >
        <h1 className="w-full text-2xl text-black ml-4 my-8">Sub Menu</h1>
        <ul className="p-4 text-black">
          <li className="ml-2">
            <Link onClick={handleNav} to="/posts" className="mx-2">
              <p data-testid="side-posts-link">to Posts</p>
            </Link>
          </li>
          <li className="ml-2">
            <Link onClick={handleNav} to="/users" className="mx-2">
              <p data-testid="side-users-link">to Users</p>
            </Link>
          </li>
          <li className="ml-2">
            <Link onClick={handleNav} to="/react-query-posts" className="mx-2">
              <p data-testid="side-react-query-posts-link">
                to ReactQueryPosts
              </p>
            </Link>
          </li>
          <li className="ml-2">
            <Link onClick={handleNav} to="/react-query-users" className="mx-2">
              <p data-testid="side-react-query-users-link">
                to ReactQueryUsers
              </p>
            </Link>
          </li>
          <li className="ml-2">
            <Link onClick={handleNav} to="/normal-fetch-posts" className="mx-2">
              <p data-testid="side-normal-fetch-posts-link">
                to NormalFetchPosts
              </p>
            </Link>
          </li>
          <li className="ml-2">
            <Link onClick={handleNav} to="/normal-fetch-users" className="mx-2">
              <p data-testid="side-normal-fetch-users-link">
                to NormalFetchUsers
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
