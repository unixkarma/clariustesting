import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';

// Pages
import Home from './pages/Home';
import Scanners from './pages/Scanners';
import Especialidades from './pages/Especialidades';
import Beneficios from './pages/Beneficios';
import Financiamiento from './pages/Financiamiento';
import Testimonios from './pages/Testimonios';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scanners" element={<Scanners />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/beneficios" element={<Beneficios />} />
            <Route path="/financiamiento" element={<Financiamiento />} />
            <Route path="/testimonios" element={<Testimonios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
