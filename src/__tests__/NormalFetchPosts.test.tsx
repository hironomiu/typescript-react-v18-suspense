import { screen, render } from '@testing-library/react'
import NormalFetchPosts from '../components/NormalFetchPosts'
import { setupServer } from 'msw/node'
import { handlers } from '../mock/handlers'
import userEvent from '@testing-library/user-event'

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

describe('first', () => {
  it('test', async () => {
    render(<NormalFetchPosts />)
    expect(screen.getByText('Fetched NormalFetchPosts')).toBeInTheDocument()
    expect(await screen.findByText('dummy title 1')).toBeInTheDocument()
    expect(screen.getByText('dummy title 2')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'DATA POST' })
    ).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', { name: 'DATA POST' }))
  })
})
