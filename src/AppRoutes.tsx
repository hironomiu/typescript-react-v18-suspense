import { Suspense } from 'react'
import Posts from './components/Posts'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Users from './components/Users'
import Home from './components/Home'
import ReactQueryPosts from './components/ReactQueryPosts'
import ReactQueryUsers from './components/ReactQueryUsers'

const AppRoutes = () => {
  return (
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
        <Route
          path="react-query-posts"
          element={
            <Suspense fallback={<h1>Loading react query posts ...</h1>}>
              <ReactQueryPosts />
            </Suspense>
          }
        ></Route>
        <Route
          path="react-query-users"
          element={
            <Suspense fallback={<h1>Loading react query users ...</h1>}>
              <ReactQueryUsers />
            </Suspense>
          }
        ></Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes
