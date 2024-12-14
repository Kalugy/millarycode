import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CalendarPage from '../components/Calendar/CalendarPage';
import FAQs from "../components/FAQ/FAQ";


function HomeScreen() {
 
  return (
      <div>
        {/* <ThemeSelector/> */}
        {/* <ButterflyScene/> */}
        {/* <Navbar /> */}
        <Header/>
        <CalendarPage />
        <Features />
        <Hero />
        <FAQs />
        {/* <Review /> */}
        {/* <Footer /> */}
      </div>
  )
}

export default HomeScreen


