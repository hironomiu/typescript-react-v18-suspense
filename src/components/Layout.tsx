import { Outlet } from 'react-router-dom'
import Header from './Header'
const Layout = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <Header />
      <main className="my-10">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
