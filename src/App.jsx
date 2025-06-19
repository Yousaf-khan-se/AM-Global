import './App.css'
import Nav from './components/Nav.jsx'
import Home from './Pages/Home.jsx'
import Footer from './components/Footer.jsx'
import JobFind from './Pages/JobFind.jsx'
import Apply from './Pages/Apply.jsx'
import Services from './Pages/Services.jsx'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Nav />
      <div className='mt-28'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobFind />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
