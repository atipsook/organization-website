import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Philosophy from './components/Philosophy';
import Privileges from './components/Privileges';
import Council from './components/Council';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar onLoginClick={() => {}} />
      <main>
        <Hero />
      
        <Philosophy />
        <Privileges />
        <Council />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
