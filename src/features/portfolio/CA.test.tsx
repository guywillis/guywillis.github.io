import { render, screen } from '@testing-library/react'
import CA from './CA'

describe('CA Project', () => {
  it('renders project heading and body', () => {
    render(<CA />)
    expect(screen.getByTestId('ca-heading')).toBeInTheDocument()
    expect(screen.getByTestId('ca-body')).toBeInTheDocument()
  })
})
