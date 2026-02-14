import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Portfolio from './Portfolio'

describe('Portfolio Page', () => {
  it('renders heading and body', () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    )
    expect(screen.getByTestId('portfolio-heading')).toBeInTheDocument()
    expect(screen.getByTestId('portfolio-body')).toBeInTheDocument()
  })
})
