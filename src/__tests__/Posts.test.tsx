import { render, screen } from '@testing-library/react'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Posts from '../components/Posts'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// TODO msw を機能させる。現状だと本物にアクセスが行ってる
const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    req.url.searchParams.get('?_limit=10')
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: 'dummy title 1',
        },
      ])
    )
  }),
]

const server = setupServer(...handlers)

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})

describe('Posts', () => {
  it('Posts', async () => {
    render(
      // <BrowserRouter>
      //   <Suspense fallback={<div>loading</div>}>
      <Posts />
      //   </Suspense>
      // </BrowserRouter>
    )
    await screen.findByText('POSTS')
    expect(screen.getByText('POSTS')).toBeInTheDocument()
    // screen.debug()
  })
})
