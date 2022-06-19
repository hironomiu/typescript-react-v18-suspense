import { screen, render } from '@testing-library/react'
import NormalFetchPosts from '../components/NormalFetchPosts'
import { setupServer } from 'msw/node'
import { handlers } from '../mock/handlers'

const server = setupServer(...handlers)

beforeEach(() => {
  server.listen()
})

describe('first', () => {
  it('test', async () => {
    render(<NormalFetchPosts />)
    expect(screen.getByText('Fetched NormalFetchPosts')).toBeInTheDocument()
    expect(await screen.findByText('dummy title 1')).toBeInTheDocument()
    expect(screen.getByText('dummy title 2')).toBeInTheDocument()
  })
})
