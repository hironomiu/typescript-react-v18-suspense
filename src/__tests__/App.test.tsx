import { render, screen } from '@testing-library/react'
import App from '../App'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

// TODO msw を機能させる。現状だと本物にアクセスが行ってる
const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
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
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: 'dummy name 1',
          email: 'dummy1@dummy1.com',
        },
        {
          id: 2,
          name: 'dummy name 2',
          email: 'dummy2@dummy2.com',
        },
      ])
    )
  }),
]

const server = setupServer(...handlers)

beforeAll(() => {
  server.listen()
})

// TODO msw
describe('App', () => {
  it('App', async () => {
    render(<App />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByTestId('home-div')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('posts-link'))
    // test関連をバージョンアップすることでSuspenseを解除、ただしモックデータではなく実データを読みにいってるので対応が必要
    // MEMO: Warning: A suspended resource finished loading inside a test, but the event was not wrapped in act(...).
    // expect(await screen.findByText('Loading posts ...')).toBeInTheDocument()
    // await act(async () => {
    //   expect(await screen.findByText('Loading posts ...')).toBeInTheDocument()
    // })
    // expect(await screen.findByText('POSTS')).toBeInTheDocument()
    // expect(screen.getByText('POSTS')).toBeInTheDocument()
    // userEvent.click(screen.getByTestId('users-link'))
    // expect(await screen.findByText('USERS')).toBeInTheDocument()
    // userEvent.click(screen.getByTestId('home-link'))
    // expect(await screen.findByTestId('home-div')).toBeInTheDocument()
    // screen.debug()
  })
})
