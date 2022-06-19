import { useQuery } from 'react-query'
import { User } from '../types'

const getUsers = async () => {
  const data = await fetch(
    'https://jsonplaceholder.typicode.com/users?_limit=10'
  )
  const json = await data.json()
  return json
}

const useQueryUsers = () => {
  return useQuery({
    queryKey: 'users',
    queryFn: getUsers,
    cacheTime: 30000,
    staleTime: 30000,
  })
}

const ReactQueryUsers = () => {
  const { data } = useQueryUsers()

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="m-4 text-2xl">Fetched ReactQueryUsers</h1>
      <ul>
        {data.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ReactQueryUsers
