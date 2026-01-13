import Header from './components/Header';
import Hero from './components/Hero';
import VisualFlow from './components/VisualFlow';
// import UseCases from './components/UseCases'; // Sección comentada - muy larga para landing inicial
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Solution from './components/Solution';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <VisualFlow /> {/* Cómo funciona - Ahora muestra ambas opciones (QR fijo O ticket) */}
        {/* <UseCases /> */}
        {/* Sección de Casos de Uso (Government/Restaurant) ocultada temporalmente - hace la landing muy larga */}
        {/* EstablishmentView eliminado - era redundante con Pricing */}
        <SocialProof /> {/* Testimoniales y prueba social */}
        <Solution /> {/* Cómo empezar - Next steps */}
        <Pricing /> {/* Detalle completo de precios - CTA final antes del footer */}
      </main>
      <Footer />
    </div>
  )
}

export default App
