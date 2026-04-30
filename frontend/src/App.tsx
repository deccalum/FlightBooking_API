import { Routes, Route } from 'react-router-dom';
import Header from './components/NavBar';
import Footer from './components/Footer';
import Start from './pages/Start';
import Flights from './pages/Flights';
import Services from './pages/Services';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;