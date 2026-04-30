import { Link, NavLink } from 'react-router-dom';
import { MdFlightTakeoff, MdNightlight, MdAccountCircle } from 'react-icons/md';
import '../styles/header.css';

export default function Header() {

  return (
    <header className="header">
      <div className="header__container">

        {/* LOGO */}
        <Link className="header__logo" to="/">
          <span className="header__logo-icon"><MdFlightTakeoff size={20} /></span>
          <span className="header__logo-text">Flights Aviation</span>
        </Link>

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
        </nav>

        {/* CONTROLS */}
        <div className="header__controls">
          <button className="header__currency" type="button">USD</button>
          <button className="header__theme-toggle" type="button" aria-label="Toggle theme">
            <MdNightlight size={20} />
          </button>
          <button className="header__account" type="button">
            <MdAccountCircle size={20} />
            <span>Account</span>
          </button>
        </div>

      </div>
    </header>
  );
}