import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
describe('Header', () => {
  it('Header', () => {
    render(
      <BrowserRouter>
        <Suspense fallback={<div>suspense</div>}>
          <Header />
        </Suspense>
      </BrowserRouter>
    )

    // MEMO: getByRoleでの存在チェック
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Posts' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Users' })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'ReactQueryPosts' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'ReactQueryUsers' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'NormalFetchPosts' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'NormalFetchUsers' })
    ).toBeInTheDocument()
    // MEMO: getByTestIdでの存在チェック
    expect(screen.getByTestId('home-link')).toBeInTheDocument()
    expect(screen.getByTestId('posts-link')).toBeInTheDocument()
    expect(screen.getByTestId('users-link')).toBeInTheDocument()
    expect(screen.getByTestId('react-query-posts-link')).toBeInTheDocument()
    expect(screen.getByTestId('react-query-users-link')).toBeInTheDocument()
    expect(screen.getByTestId('normal-fetch-posts-link')).toBeInTheDocument()
    expect(screen.getByTestId('normal-fetch-users-link')).toBeInTheDocument()
  })
})
