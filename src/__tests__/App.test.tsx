import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { setupServer } from 'msw/node'
import App from '../App'
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

// TODO msw
describe('App', () => {
  it('App', async () => {
    render(<App />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByTestId('home-div')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('react-query-posts-link'))
    expect(
      screen.getByText('Loading react query posts ...')
    ).toBeInTheDocument()
    expect(
      await screen.findByText('Fetched ReactQueryPost')
    ).toBeInTheDocument()
    expect(screen.getByText('dummy title 1')).toBeInTheDocument()
    expect(screen.getByText('dummy title 2')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('react-query-users-link'))
    expect(
      screen.getByText('Loading react query users ...')
    ).toBeInTheDocument()
    expect(await screen.findByText('John')).toBeInTheDocument()
    expect(screen.getByText('Taro')).toBeInTheDocument()
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
