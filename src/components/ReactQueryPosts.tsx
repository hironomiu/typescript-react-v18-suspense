import { useQuery } from 'react-query'

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
    <div>
      <h1 className="m-4 text-2xl">ReactQueryPost</h1>
      <ul>
        {data.map((d: any) => (
          <li key={d.id}>{d.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ReactQueryPosts
