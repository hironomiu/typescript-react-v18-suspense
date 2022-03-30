export const fetchProfileData = () => {
  let postsPromise = fetchPosts()
  return {
    posts: wrapPromise(postsPromise),
  }
}

const wrapPromise = (promise: Promise<Response>) => {
  let status = 'pending'
  // TODO 型
  let result: any
  let suspender = promise.then(
    async (r: Response) => {
      const data = await r.json()
      status = 'success'
      result = data
    },
    (error) => {
      status = 'error'
      result = error
    }
  )

  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      } else {
        console.log('posts else:', status)
      }
    },
  }
}

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
}
