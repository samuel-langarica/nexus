import Header from './components/Header';
import Hero from './components/Hero';
import VisualFlow from './components/VisualFlow';
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
        <EstablishmentView />
        <Solution />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
