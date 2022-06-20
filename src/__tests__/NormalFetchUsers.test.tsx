import { render, screen } from '@testing-library/react'
import NormalFetchUsers from '../components/NormalFetchUsers'
import { setupServer } from 'msw/node'
import { handlers } from '../mock/handlers'

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

describe('NormalFetchUsers', () => {
  it('test', async () => {
    render(<NormalFetchUsers />)
    expect(screen.getByText('Fetched NormalFetchUsers')).toBeInTheDocument()
    expect(await screen.findByText('John')).toBeInTheDocument()
  })
})
