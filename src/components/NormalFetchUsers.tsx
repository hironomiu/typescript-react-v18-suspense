import { useState, useEffect } from 'react'
import { User } from '../types'

const gethUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return await response.json()
}

const NormalFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    ;(async () => {
      const json = await gethUsers()
      setUsers(json)
    })()
  }, [])
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="m-4 text-2xl">Fetched NormalFetchUsers</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default NormalFetchUsers
