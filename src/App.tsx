import { Suspense } from 'react'
import Posts from './components/Posts'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Users from './components/Users'
import Home from './components/Home'

const App = () => {
  // const fallback = <h1>Loading ...</h1>
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/posts"
            element={
              <Suspense fallback={<h1>Loading posts ...</h1>}>
                <Posts />
              </Suspense>
            }
          ></Route>
          <Route
            path="/users"
            element={
              <Suspense fallback={<h1>Loading users ...</h1>}>
                <Users />
              </Suspense>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
