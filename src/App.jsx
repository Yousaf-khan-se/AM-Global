import './App.css';
import Nav from './components/Nav.jsx';
import Home from './Pages/Home.jsx';
import Footer from './components/Footer.jsx';
import JobFind from './Pages/JobFind.jsx';
import Apply from './Pages/Apply.jsx';
import Services from './Pages/Services.jsx';
import Proposal from './Pages/Porposal.jsx';
import JobFindSearchPage from './Pages/JobFindSearchPage.jsx';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import ForgotPassword from './Pages/ForgotPassword.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

import { configBackEndBaseUrl } from './configurations/config.js';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './thunk/userThunk.js';
import AuthRoute from './components/AuthRoute.jsx';

function App() {
  const [backEndLoading, setbackEndLoading] = useState(true);
  const [backEndError, setbackEndError] = useState(null);
  const [appReady, setAppReady] = useState(false);

  const dispatch = useDispatch();
  const { loading: userLoading, error: userError } = useSelector(state => state.user);


  useEffect(() => {
    configBackEndBaseUrl('http://localhost:3000/').then((response) => {
      if (response.data.connected) {
        console.log('✅ Backend connected successfully');

        dispatch(loadUser());

        setAppReady(true);
        setbackEndLoading(false);
      } else {
        setbackEndError('❌ Failed to connect to backend');
        setbackEndLoading(false);
        setAppReady(true);
      }
    }).catch((error) => {
      setbackEndError(error.message || '❌ Backend connection failed');
      setbackEndLoading(false);
      setAppReady(true);
    });
  }, [dispatch]);

  if (backEndLoading) return <div className="text-center mt-32">🔄 Connecting to backend...</div>;
  if (userLoading) return <div className="text-center mt-32">🔄 Loading user data...</div>;

  if (backEndError) return <div className="text-center mt-32 text-red-500">⚠️ {backEndError}</div>;

  if (userError && !backEndError) {
    console.log('No active session found:', userError);
  }

  if (!appReady) return <div className="text-center mt-32">🔄 Loading application...</div>;

  return (
    <Router>
      <Nav />
      <div className='mt-28'>
        <Routes>
          <Route element={<AuthRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/jobs" element={<JobFind />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/proposal" element={<Proposal />} />
            <Route path="/jobfindsearch" element={<JobFindSearchPage />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
