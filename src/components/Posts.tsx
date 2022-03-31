import { useState } from 'react'
import { fetchProfileData } from '../fetchApi'

const resource = fetchProfileData()

// TODO 型（使ってるものだけ定義してる）
type Post = {
  id: number
  title: string
}

const Posts = () => {
  const [data] = useState(() => resource.posts.read())
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
