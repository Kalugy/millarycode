import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomeScreen from './pages/HomeScreen';
import TeamScreen from './pages/TeamScreen';
import WhitepaperScreen from './pages/WhitepaperScreen'


function App() {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} /> 
          <Route path="/team" element={<TeamScreen />} /> 
          <Route path="/whitepaper" element={<WhitepaperScreen />} /> 

          {/* <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} /> */}
        </Route>
      </Routes>
    // </Router>
  )
}

export default App


