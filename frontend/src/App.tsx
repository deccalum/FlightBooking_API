import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Flights from './pages/Flights';
import Services from './pages/Services';
import Bookings from './pages/Bookings';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;