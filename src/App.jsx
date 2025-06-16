import './App.css'
import Nav from './components/Nav.jsx'
import Home from './Pages/Home.jsx'
import Footer from './components/Footer.jsx'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
