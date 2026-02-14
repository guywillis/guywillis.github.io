import { render, screen } from '@testing-library/react'
import MBC from './MBC'

describe('MBC Project', () => {
  it('renders project heading and body', () => {
    render(<MBC />)
    expect(screen.getByTestId('mbc-heading')).toBeInTheDocument()
    expect(screen.getByTestId('mbc-body')).toBeInTheDocument()
  })
})
