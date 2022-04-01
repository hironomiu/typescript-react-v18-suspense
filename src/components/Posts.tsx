import { useState } from 'react'
import { fetchPostsData } from '../fetchApi'

const resource = fetchPostsData()

// TODO 型（使ってるものだけ定義してる）
type Post = {
  id: number
  title: string
}

const Posts = () => {
  const [data] = useState(() => resource.read())
  return (
    <>
      <h1>POSTS</h1>
      <ul>
        {data.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Posts
