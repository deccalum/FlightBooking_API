import { Link } from 'react-router-dom';
import { MdFlightTakeoff } from 'react-icons/md';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* BRAND */}
        <div className="footer__brand">
          <span className="footer__brand-icon"><MdFlightTakeoff size={16} /></span>
          <span className="footer__brand-text">Flights Aviation</span>
        </div>

        {/* NAV */}
        <nav className="footer__nav">
          {/*           
          <Link className="footer__link" to="/flights">Flights</Link>
          <Link className="footer__link" to="/services">Services</Link>
          <Link className="footer__link" to="/bookings">My Bookings</Link> 
          */}

        </nav>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer__bottom">
        <p className="footer__copyright">© 2025 Flights Aviation. All rights reserved.</p>
        <nav className="footer__legal" aria-label="Legal">
          <Link className="footer__link" to="/privacy">Privacy</Link>
          <Link className="footer__link" to="/terms">Terms</Link>
          <Link className="footer__link" to="/support">Support</Link>
        </nav>
      </div>
    </footer>
  );
}
