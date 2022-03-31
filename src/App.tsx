import { Suspense } from 'react'
import Posts from './components/Posts'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

const App = () => {
  const fallback = <h1>Loading posts...</h1>
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={fallback}>
                <Posts />
              </Suspense>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
