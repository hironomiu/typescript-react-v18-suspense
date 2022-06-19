import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import ReactQueryUsers from '../components/ReactQueryUsers'
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

describe('ReactQueryUsers', () => {
  it('test', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ReactQueryUsers />
      </QueryClientProvider>
    )
    expect(
      await screen.findByText('Fetched ReactQueryUsers')
    ).toBeInTheDocument()
    expect(screen.getByText('John')).toBeInTheDocument()
    expect(screen.getByText('Taro')).toBeInTheDocument()
  })
})
