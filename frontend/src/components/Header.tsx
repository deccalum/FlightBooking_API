import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdFlightTakeoff, MdNightlight, MdAccountCircle, MdMenu, MdClose } from 'react-icons/md';
import { FiDollarSign } from 'react-icons/fi';
import '../styles/header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `header__nav-link${isActive ? ' header__nav-link--active' : ''}`;
  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `header__mobile-link${isActive ? ' header__mobile-link--active' : ''}`;

  return (
    <header className="header">
      <div className="header__container">

        {/* LOGO */}
        <Link className="header__logo" to="/" onClick={closeMenu}>
          <span className="header__logo-icon"><MdFlightTakeoff size={18} /></span>
          <span className="header__logo-text">Flights Aviation</span>
        </Link>

        <span className="header__divider" aria-hidden="true" />

        {/* NAV — desktop */}
        <nav className="header__nav">
          <NavLink className={navLinkClass} to="/flights">Flights</NavLink>
          <NavLink className={navLinkClass} to="/services">Services</NavLink>
          <NavLink className={navLinkClass} to="/bookings">My Bookings</NavLink>
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

          {/* Hamburger — mobile only */}
          <button
            className="header__menu-btn"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? <MdClose size={22} /> : <MdMenu size={22} />}
          </button>
        </div>

      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <nav className="header__mobile-nav" onClick={closeMenu}>
          <NavLink className={mobileNavLinkClass} to="/flights">Flights</NavLink>
          <NavLink className={mobileNavLinkClass} to="/services">Services</NavLink>
          <NavLink className={mobileNavLinkClass} to="/bookings">My Bookings</NavLink>
          <NavLink className={mobileNavLinkClass} to="/live">Live Dashboard</NavLink>
        </nav>
      )}
    </header>
  );
}
