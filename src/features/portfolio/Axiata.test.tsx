import { render, screen } from '@testing-library/react'
import Axiata from './Axiata'

describe('Axiata Project', () => {
  it('renders project heading and body', () => {
    render(<Axiata />)
    expect(screen.getByTestId('axiata-heading')).toBeInTheDocument()
    expect(screen.getByTestId('axiata-body')).toBeInTheDocument()
  })
})
