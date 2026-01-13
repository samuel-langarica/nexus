import Header from './components/Header';
import Hero from './components/Hero';
import VisualFlow from './components/VisualFlow';
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
        <VisualFlow />
        <SocialProof />
        <Solution />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
