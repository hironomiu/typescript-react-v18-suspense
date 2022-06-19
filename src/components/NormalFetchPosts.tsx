import { useState, useEffect } from 'react'
import { Post } from '../types'

const getPosts = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  )
  return await response.json()
}

const postPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return await response.json()
}

// MEMO: Suspenseは対応できていない
const NormalFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    ;(async () => {
      const json = await getPosts()
      setPosts(json)
    })()
  }, [])
  const handlePostClick = async (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    e.preventDefault()
    const json = await postPosts()
    console.log(json)
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="m-4 text-2xl">Fetched NormalFetchPosts</h1>
      <button onClick={handlePostClick} className="">
        DATA POST
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default NormalFetchPosts
