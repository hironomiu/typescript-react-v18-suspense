export const fetchPostsData = () => {
  const postsPromise = fetchPosts()
  return wrapPromise(postsPromise)
}

export const fetchUsersData = () => {
  const usersPromise = fetchUsers()
  return wrapPromise(usersPromise)
}

const wrapPromise = (promise: Promise<Response>) => {
  let status: 'pending' | 'success' | 'error' = 'pending'
  let result: [] = []
  let error: unknown = null
  let suspender = promise.then(
    async (r: Response) => {
      const data = await r.json()
      status = 'success'
      result = data
      console.log(data)
    },
    (e) => {
      status = 'error'
      error = e
    }
  )

  return {
    read() {
      if (status === 'pending') {
        console.log('pending')
        throw suspender
      } else if (status === 'error') {
        throw error
      } else if (status === 'success') {
        console.log('success')

        return result
      } else {
        const strangeStatus: never = status
        throw new Error(`${strangeStatus}`)
      }
    },
  }
}

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
}

const fetchUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
}
