import Header from '../components/Home/Header';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import CalendarPage from '../components/Calendar/CalendarPage';
import FAQs from "../components/FAQ/FAQ";
import Section from '../components/Section';
import About from '../components/Home/About';
import TimelineCarousel from '../components/Home/TimelineCarousel';

function HomeScreen() {
 
  return (
      <div>
        {/* <ThemeSelector/> */}
        {/* <ButterflyScene/> */}
        {/* <Navbar /> */}
        <Section>
          <Header/>
        </Section>
        {/* <Section> */}
          <About />

        {/* </Section> */}
        <Section>
          <CalendarPage />
        </Section>
        
        <Features />
        <TimelineCarousel />

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


