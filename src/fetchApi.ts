export const fetchProfileData = () => {
  let postsPromise = fetchPosts()
  return {
    posts: wrapPromise(postsPromise),
  }
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
    },
    (e) => {
      status = 'error'
      error = e
    }
  )

  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw error
      } else if (status === 'success') {
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
