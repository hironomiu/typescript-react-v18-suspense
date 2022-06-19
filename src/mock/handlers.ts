import { rest } from 'msw'

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    req.url.searchParams.get('?_limit=10')
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: 'dummy title 1',
        },
        {
          id: 2,
          title: 'dummy title 2',
        },
      ])
    )
  }),
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: 'John',
          email: 'john@example.com',
        },
        {
          id: 2,
          name: 'Taro',
          email: 'taro@example.com',
        },
      ])
    )
  }),
]
