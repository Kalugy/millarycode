import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import CalendarPage from './components/Calendar/CalendarPage';
import FAQs from "./components/FAQ/FAQ";
//import Review from "./components/Review/Review";

function App() {

  return (
    <div>
      <Header />
      <CalendarPage />
      <Features />
      <Hero />
      <FAQs />
      {/* <Review /> */}
      <Footer />
    </div>
  )
}

export default App


