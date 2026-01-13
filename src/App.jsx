import Header from './components/Header';
import Hero from './components/Hero';
import VisualFlow from './components/VisualFlow';
import EstablishmentView from './components/EstablishmentView';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <VisualFlow />
        <EstablishmentView />
        <Problem />
        <Solution />
      </main>
      <Footer />
    </div>
  )
}

export default App
