import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Layout from './Layout'

describe('Layout', () => {
  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /portfolio/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /tenzies/i })).toBeInTheDocument()
  })

  it('renders main content outlet', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )
    expect(screen.getByTestId('main-content')).toBeInTheDocument()
  })
})
