import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import CalendarPage from './components/Calendar/CalendarPage';

function App() {

  return (
    <div>
      <Header />
        <CalendarPage />

      <Features />

      <Hero />
      <Footer />
    </div>
  )
}

export default App


