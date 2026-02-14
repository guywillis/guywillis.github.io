import { render, screen } from '@testing-library/react'
import RSH from './RSH'

describe('RSH Project', () => {
  it('renders project heading and body', () => {
    render(<RSH />)
    expect(screen.getByTestId('rsh-heading')).toBeInTheDocument()
    expect(screen.getByTestId('rsh-body')).toBeInTheDocument()
  })
})
