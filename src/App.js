import {Routes, Route} from 'react-router-dom'
import AboutPage from './components/AboutPage'
import LandingPage from './components/LandingPage'

const App = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/about" element={<AboutPage />} />
  </Routes>
)

export default App
