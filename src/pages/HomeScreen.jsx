import Header from '../components/Home/Header';
import PlatesCarousel from '../components/Home/PlatesCarousel';
import Services from '../components/Home/Services';
import FAQs from "../components/Home/Dishes";
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';
import Team from '../components/Home/Team';
import CallToActionSection from '../components/Home/CallToActionSection';
import Description from '../components/Home/Description';
import Dishes from '../components/Home/Dishes';


function HomeScreen() {
 
  return (
      <div>
        <Header/>
        <About />
        <Description />
        <Team />
        
        <CallToActionSection />
        <Services />
        <PlatesCarousel />
        
        <Dishes />
        <Contact />
      </div>
  )
}
 


export default HomeScreen


