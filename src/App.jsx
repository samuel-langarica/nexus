import Header from './components/Header';
import Hero from './components/Hero';
import VisualFlow from './components/VisualFlow';
// import UseCases from './components/UseCases'; // Sección comentada - muy larga para landing inicial
import EstablishmentView from './components/EstablishmentView';
import Solution from './components/Solution';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <VisualFlow />
        {/* <UseCases /> */}
        {/* Sección de Casos de Uso (Government/Restaurant) ocultada temporalmente - hace la landing muy larga */}
        <EstablishmentView />
        <Solution />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
