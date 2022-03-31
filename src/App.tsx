import { Suspense } from 'react'
import Posts from './components/Posts'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import TabA from './components/TabA'

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
          <Route path="/tab-a" element={<TabA />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
