import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Home from './Home'

describe('Home Page', () => {
  it('renders heading and body', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    expect(screen.getByTestId('home-heading')).toBeInTheDocument()
    expect(screen.getByTestId('home-body')).toBeInTheDocument()
  })
})
