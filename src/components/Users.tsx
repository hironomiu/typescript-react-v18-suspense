import { useState } from 'react'
import { fetchUsersData } from '../fetchApi'
import { User } from '../types'

const resource = fetchUsersData()

const Users = () => {
  const [data] = useState(() => resource.read())
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-4 text-2xl">USERS</h1>
      <ul>
        {data.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Users
