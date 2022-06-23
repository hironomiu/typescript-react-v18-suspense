import { render, screen } from '@testing-library/react'
import ChildComponent from '../components/ChildComponent'
import userEvent from '@testing-library/user-event'

describe('ChildComponent', () => {
  it('test', () => {
    const count = 0
    const setCount = jest.fn()
    render(<ChildComponent count={count} setCount={setCount} />)
    expect(screen.getByTestId('count-span').textContent).toEqual('0')
    // TODO: mockなので動作はしない（別テストで動作確認はしているのでこのままで良いか確認）
    userEvent.click(screen.getByRole('button', { name: '+' }))
  })
})
