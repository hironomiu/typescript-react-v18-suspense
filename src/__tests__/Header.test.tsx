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

    expect(screen.getByTestId('home-link')).toBeInTheDocument()
    expect(screen.getByTestId('posts-link')).toBeInTheDocument()
    expect(screen.getByTestId('users-link')).toBeInTheDocument()
  })
})
