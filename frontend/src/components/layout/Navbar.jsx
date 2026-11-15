
import { Link, NavLink } from 'react-router'

function Navbar() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Opportunities', path: '/opportunities' },
    { name: 'For Students', path: '/students' },
    { name: 'For Recruiters', path: '/recruiters' },
    { name: 'About', path: '/about' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link to="/" className="text-2xl font-bold">
          Hire<span className="text-blue-600">Track</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-blue-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 sm:block"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

      </nav>
    </header>
  )
}

export default Navbar
