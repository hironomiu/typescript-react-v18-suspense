import { Suspense } from 'react'
import Posts from './components/Posts'

const App = () => {
  const fallback = <h1>Loading posts...</h1>
  return (
    <>
      <Suspense fallback={fallback}>
        <Posts />
      </Suspense>
    </>
  )
}

export default App
