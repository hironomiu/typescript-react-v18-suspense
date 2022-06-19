import { useQuery } from 'react-query'
import { Post } from '../types'

const getPosts = async () => {
  const data = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  )
  const json = await data.json()
  return json
}

const useQueryPosts = () => {
  return useQuery({
    queryKey: 'posts',
    queryFn: getPosts,
    cacheTime: 30000,
    staleTime: 30000,
  })
}

const ReactQueryPosts = () => {
  const { data } = useQueryPosts()

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="m-4 text-2xl">Fetched ReactQueryPost</h1>
      <ul>
        {data.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ReactQueryPosts
