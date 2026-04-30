import { Link, NavLink } from 'react-router-dom';
import { MdFlightTakeoff, MdNightlight, MdAccountCircle } from 'react-icons/md';
import { FiDollarSign } from 'react-icons/fi';
import '../styles/header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">

        {/* LOGO */}
        <Link className="header__logo" to="/">
          <span className="header__logo-icon"><MdFlightTakeoff size={18} /></span>
          <span className="header__logo-text">Flights Aviation</span>
        </Link>

        <span className="header__divider" aria-hidden="true" />

        {/* NAV */}
        <nav className="header__nav">
          <NavLink
            className={({ isActive }) =>
              `header__nav-link${isActive ? ' header__nav-link--active' : ''}`
            }
            to="/flights"
          >
            Flights
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `header__nav-link${isActive ? ' header__nav-link--active' : ''}`
            }
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `header__nav-link${isActive ? ' header__nav-link--active' : ''}`
            }
            to="/bookings"
          >
            My Bookings
          </NavLink>
        </nav>

        <span className="header__divider" aria-hidden="true" />

        {/* CONTROLS */}
        <div className="header__controls">
          <button className="header__currency" type="button" aria-label="Currency">
            <FiDollarSign size={14} />
            <span>USD</span>
          </button>
          <button className="header__theme-toggle" type="button" aria-label="Toggle theme">
            <MdNightlight size={18} />
          </button>
          <button className="header__account" type="button">
            <MdAccountCircle size={18} />
            <span className="header__account-label">Account</span>
          </button>
        </div>

      </div>
    </header>
  );
}
