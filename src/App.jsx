import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import CalendarPage from './components/Calendar/CalendarPage';
import FAQs from "./components/FAQ/FAQ";
//import Review from "./components/Review/Review";
import Navbar from './components/Navbar/Navbar';
import useAnalytics from './hooks/useAnalytics';
import { useTheme } from './components/Theme/ThemeContext';
// import { ThemeSelector } from './components/Theme/ThemeSelector';


function App() {
  useAnalytics(); // Initialize Google Analytics
  const { theme } = useTheme();

  return (
      <div className={`theme-${theme}`}>
        {/* <ThemeSelector/> */}
        <Navbar />
        <Header/>
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


