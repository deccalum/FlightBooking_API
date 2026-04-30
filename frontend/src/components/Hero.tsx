import { useState } from 'react';
import {
  MdSwapHoriz,
  MdMyLocation,
  MdLocationSearching,
  MdCalendarMonth,
  MdPeople,
  MdAirlineSeatReclineNormal,
} from 'react-icons/md';
import '../styles/hero.css';

const FLEX_DURATIONS = ['Weekend', '1 week', '2 weeks', 'Anytime'] as const;
type FlexDuration = typeof FLEX_DURATIONS[number];

export default function Hero() {
  const [flexDates, setFlexDates] = useState(false);
  const [flexDuration, setFlexDuration] = useState<FlexDuration>('1 week');

  return (
    <section className="hero">

      {/* PRELUDE */}
      <div className="hero__prelude">
        <h1 className="hero__heading">Where are we going?</h1>
        <p className="hero__subheading">Explore destinations with precision and speed.</p>
      </div>

      {/* SEARCH CARD */}
      <div className="hero__search">

        {/* OPTIONS ROW */}
        <div className="hero__options">
          <div className="hero__trip-type">
            <label className="hero__radio">
              <input type="radio" name="trip" value="return" defaultChecked />
              <span>Return</span>
            </label>
            <label className="hero__radio">
              <input type="radio" name="trip" value="oneway" />
              <span>One-way</span>
            </label>
          </div>
          <div className="hero__trip-meta">
            <button type="button" className="hero__meta-btn">
              <MdPeople size={14} />
              <span>1 Adult</span>
            </button>
            <button type="button" className="hero__meta-btn">
              <MdAirlineSeatReclineNormal size={14} />
              <span>Economy</span>
            </button>
          </div>
        </div>

        {/* FIELDS ROW */}
        <div className="hero__fields">

          {/* FROM */}
          <div className="hero__field">
            <span className="hero__field-label">From</span>
            <div className="hero__field-input">
              <MdMyLocation size={15} className="hero__field-icon" />
              <input type="text" placeholder="Current location" />
            </div>
          </div>

          {/* SWAP */}
          <button
            type="button"
            className="hero__swap"
            aria-label="Swap origin and destination"
          >
            <MdSwapHoriz size={18} />
          </button>

          {/* TO */}
          <div className="hero__field">
            <span className="hero__field-label">To</span>
            <div className="hero__field-input">
              <MdLocationSearching size={15} className="hero__field-icon" />
              <input type="text" placeholder="Destination" />
            </div>
          </div>

          {/* DATES */}
          <div className="hero__field hero__field--dates">
            <div className="hero__field-label-row">
              <span className="hero__field-label">Dates</span>
              <button
                type="button"
                className={`hero__dates-mode${flexDates ? ' hero__dates-mode--flex' : ''}`}
                onClick={() => setFlexDates(f => !f)}
              >
                {flexDates ? 'Flexible' : 'Fixed'}
              </button>
            </div>

            {flexDates ? (
              <div className="hero__flex-chips">
                {FLEX_DURATIONS.map(dur => (
                  <button
                    key={dur}
                    type="button"
                    className={
                      `hero__flex-chip${flexDuration === dur ? ' hero__flex-chip--active' : ''}`
                    }
                    onClick={() => setFlexDuration(dur)}
                  >
                    {dur}
                  </button>
                ))}
              </div>
            ) : (
              <div className="hero__field-input">
                <MdCalendarMonth size={15} className="hero__field-icon" />
                <input type="text" placeholder="Depart – Return" readOnly />
              </div>
            )}
          </div>

          {/* BOOK */}
          <button type="submit" className="hero__book-btn">
            Book
          </button>

        </div>
      </div>

    </section>
  );
}
