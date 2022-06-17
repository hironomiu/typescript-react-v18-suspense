import { useState } from 'react'
import { fetchPostsData } from '../fetchApi'
import { Post } from '../types'

const resource = fetchPostsData()

const Posts = () => {
  const [data] = useState(() => resource.read())
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-4 text-2xl">POSTS</h1>
      <ul>
        {data.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Posts
