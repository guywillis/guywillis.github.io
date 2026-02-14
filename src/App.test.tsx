import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import App from './App'

describe('App routing', () => {
  function renderWithRoute(route: string) {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    )
  }

  it('renders Home page at /', () => {
    renderWithRoute('/')
    expect(screen.getByTestId('home-page')).toBeInTheDocument()
    expect(screen.getByTestId('home-heading')).toBeInTheDocument()
  })

  it('renders Tenzies page at /tenzies', () => {
    renderWithRoute('/tenzies')
    expect(screen.getByTestId('tenzies-page')).toBeInTheDocument()
    expect(screen.getByTestId('tenzies-heading')).toBeInTheDocument()
  })

  it('renders Portfolio index page at /portfolio', () => {
    renderWithRoute('/portfolio')
    expect(screen.getByTestId('portfolio-page')).toBeInTheDocument()
    expect(screen.getByTestId('portfolio-heading')).toBeInTheDocument()
  })

  it('renders all Portfolio projects', () => {
    const projects = [
      { route: '/portfolio/jumps', testId: 'jumps-page' },
      { route: '/portfolio/axiata', testId: 'axiata-page' },
      { route: '/portfolio/rsh', testId: 'rsh-page' },
      { route: '/portfolio/mbc', testId: 'mbc-page' },
      { route: '/portfolio/motd', testId: 'motd-page' },
      { route: '/portfolio/ca', testId: 'ca-page' }
    ]

    projects.forEach(({ route, testId }) => {
      renderWithRoute(route)
      expect(screen.getByTestId(testId)).toBeInTheDocument()
    })
  })
})
