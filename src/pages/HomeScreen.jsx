import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CalendarPage from '../components/Calendar/CalendarPage';
import FAQs from "../components/FAQ/FAQ";
import Section from '../components/Section';

function HomeScreen() {
 
  return (
      <div>
        {/* <ThemeSelector/> */}
        {/* <ButterflyScene/> */}
        {/* <Navbar /> */}
        <Section>
          <Header/>
        </Section>
        <Section>
          <CalendarPage />
        </Section>
        <Section>
          <Features />
        </Section>
        <Section>
          <Hero />
        </Section>
        <Section>
        <FAQs />
        </Section>
        {/* <Review /> */}
        {/* <Footer /> */}
      </div>
  )
}

export default HomeScreen


