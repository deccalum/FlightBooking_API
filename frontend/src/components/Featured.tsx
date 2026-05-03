import { Link } from 'react-router-dom';
import '../styles/featured.css';

// Placeholder api content
const FEATURED_FLIGHTS = [
  {
    id: 'feat-1',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAopja5YdCphr7eFjXp-AV-m9S2KIIAFgjZf6roeOHu72OaNgRtH9QOtF9o3a5XpfANOPZ2Zy8QoVhGtLYh4_5s49L_vykIcKbc80olH-lgGDmyaXX4Q00_DfhCCROZf2xU0v3JcB6UrJKdko6RWY8Ws3cAiZ4xgNFsSIsXzf7ko3uN25j_wYg64tKoyQmKh-LBv2ql4XBN2SADeAFhd0Z2Ml0dGHOlyHcc-cUeEfZXUmqMb8UoqgID4p-GDw54Oenmp55NRiIXwHE',
    fromCode: 'JFK',
    toCode: 'LHR',
    fromCity: 'NYC',
    toCity: 'LON',
    label: 'JFK to LHR',
    price: 450,
    currency: 'USD',
    dateRange: 'Oct 12 – Oct 19',
  },
];

export default function Featured() {
  return (
    <section className="featured">

      {/* HEADER */}
      <div className="featured__header">
        <h2 className="featured__title">Featured</h2>
        <Link to="/flights" className="featured__view-all">View all</Link>
      </div>

      {/* SCROLLER */}
      <div className="featured__scroller">
        {FEATURED_FLIGHTS.map(flight => (
          <article key={flight.id} className="featured__card">
            <div
              className="featured__card-image"
              style={{ backgroundImage: `url(${flight.imageUrl})` }}
              aria-hidden="true"
            />

            <div className="featured__card-body">
              <div className="featured__card-top">
                <span className="featured__card-cities">
                  {flight.fromCity} → {flight.toCity}
                </span>
                <span className="featured__card-price">
                  ${flight.price.toLocaleString()}
                </span>
              </div>

              <div className="featured__card-bottom">
                <div>
                  <p className="featured__card-label">{flight.label}</p>
                  <p className="featured__card-dates">{flight.dateRange}</p>
                </div>
                <button type="button" className="featured__card-btn">
                  Book Now
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
