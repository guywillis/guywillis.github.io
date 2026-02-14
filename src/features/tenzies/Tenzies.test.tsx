import { render, screen, fireEvent } from '@testing-library/react'
import Tenzies from './Tenzies'

describe('Tenzies Game', () => {
  it('renders heading and roll button', () => {
    render(<Tenzies />)
    expect(screen.getByTestId('tenzies-heading')).toBeInTheDocument()
    expect(screen.getByTestId('tenzies-body')).toBeInTheDocument()
    expect(screen.getByTestId('roll-button')).toBeInTheDocument()
  })

  it('roll button triggers dice update', () => {
    render(<Tenzies />)
    const rollButton = screen.getByTestId('roll-button')
    fireEvent.click(rollButton)

    const dice = screen.getAllByTestId(/die-/i)
    expect(dice.length).toBeGreaterThan(0)
  })
})
