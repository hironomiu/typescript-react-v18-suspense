import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex bg-black text-gray-300 h-16 items-center w-screen">
      <nav className="mx-10 flex justify-between">
        <div>
          <Link to="/" className="mx-2">
            <p data-testid="home-link">Home</p>
          </Link>
        </div>
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
    </header>
  )
}

export default Header
