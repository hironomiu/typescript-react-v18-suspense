import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import ReactQueryPosts from '../components/ReactQueryPosts'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
})

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
        {
          id: 2,
          title: 'dummy title 2',
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

// TODO: 追記
describe('ReactQueryPost', () => {
  it('test', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ReactQueryPosts />
        </BrowserRouter>
      </QueryClientProvider>
    )
    expect(await screen.findByText('ReactQueryPost')).toBeInTheDocument()
  })
})
