import { Suspense } from 'react'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import ReactQueryPosts from '../components/ReactQueryPosts'
import { setupServer } from 'msw/node'
import { handlers } from '../mock/handlers'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
})

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
          <Suspense fallback={<div>loading ...</div>}>
            <ReactQueryPosts />
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    )
    expect(screen.getByText('loading ...')).toBeInTheDocument()
    expect(
      await screen.findByText('Fetched ReactQueryPost')
    ).toBeInTheDocument()
    expect(screen.getByText('dummy title 1')).toBeInTheDocument()
    expect(screen.getByText('dummy title 2')).toBeInTheDocument()
  })
})
