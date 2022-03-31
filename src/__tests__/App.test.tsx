import { render, screen } from '@testing-library/react'
import App from '../App'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { BrowserRouter } from 'react-router-dom'

const handlers = [
  rest.get(
    'https://jsonplaceholder.typicode.com/posts?_limit=10',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: 1,
          title: 'dummy title 1',
        })
      )
    }
  ),
]

const server = setupServer(...handlers)

beforeAll(() => {
  server.listen()
})

// TODO msw
describe('App', () => {
  it('App', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const linkElement = screen.getByText(/POSTS/i)
    expect(linkElement).toBeInTheDocument()
    expect(screen.getByText('Loading posts...')).toBeInTheDocument()
    // expect(await screen.findByText('POSTS')).toBeInTheDocument()
    // screen.debug()
  })
})
