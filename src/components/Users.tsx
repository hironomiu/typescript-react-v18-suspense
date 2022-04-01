import { useState } from 'react'
import { fetchUsersData } from '../fetchApi'

const resource = fetchUsersData()
type User = {
  id: number
  name: string
  email: string
}

const Users = () => {
  const [data] = useState(() => resource.read())
  return (
    <>
      <h1>USERS</h1>
      <ul>
        {data.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Users
