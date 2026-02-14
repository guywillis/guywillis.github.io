import { render, screen } from '@testing-library/react'
import Jumps from './Jumps'

describe('Jumps Project', () => {
  it('renders project heading and body', () => {
    render(<Jumps />)
    expect(screen.getByTestId('jumps-heading')).toBeInTheDocument()
    expect(screen.getByTestId('jumps-body')).toBeInTheDocument()
  })
})
