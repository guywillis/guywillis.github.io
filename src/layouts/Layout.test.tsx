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

    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Old Portfolio/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Tenzies/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Text Reveal/i })).toBeInTheDocument()
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
