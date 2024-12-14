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
// import ButterflyScene from './components/ButterflyScene';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import TeamScreen from './pages/TeamScreen';
import WhitepaperScreen from './pages/WhitepaperScreen'

function App() {
  // useAnalytics(); // Initialize Google Analytics
  const { theme } = useTheme();
  return (
    <Router>
      <Routes>
        {/* Define the layout */}
        <Route path="/" element={<Layout />}>
          {/* Define inner routes */}
          <Route index element={<HomeScreen />} /> {/* Default route */}
          <Route path="/team" element={<TeamScreen />} /> {/* Default route */}
          <Route path="/whitepaper" element={<WhitepaperScreen />} /> {/* Default route */}

          {/* <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} /> */}
        </Route>
      </Routes>
    </Router>



  // return (
  //     <div className={`theme-${theme}`}>
  //       {/* <ThemeSelector/> */}
  //       {/* <ButterflyScene/> */}
  //       <Navbar />
  //       <Header/>
  //       <CalendarPage />
  //       <Features />
  //       <Hero />
  //       <FAQs />
  //       {/* <Review /> */}
  //       <Footer />
  //     </div>
  )
}

export default App


