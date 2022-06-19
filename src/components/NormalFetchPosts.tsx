import { useState, useEffect } from 'react'
import { Post } from '../types'

const fetchPosts = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  )
  return await response.json()
}

// MEMO: Suspenseは対応できていない
const NormalFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    ;(async () => {
      const json = await fetchPosts()
      setPosts(json)
    })()
  }, [])
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="m-4 text-2xl">Fetched NormalFetchPosts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default NormalFetchPosts
