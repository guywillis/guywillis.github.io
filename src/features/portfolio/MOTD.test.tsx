import { render, screen } from '@testing-library/react'
import MOTD from './MOTD'

describe('MOTD Project', () => {
  it('renders project heading and body', () => {
    render(<MOTD />)
    expect(screen.getByTestId('motd-heading')).toBeInTheDocument()
    expect(screen.getByTestId('motd-body')).toBeInTheDocument()
  })
})
