import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbars/Navbar';
import Home from './pages/Home';
import Places from './pages/Places';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';
import Reports from './pages/Report';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ServicesPage from './pages/Service';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;