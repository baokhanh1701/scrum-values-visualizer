import './App.css';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import UserInfo from './Pages/UserInfo';
import ErrorPage from './Pages/ErrorPage';
import LandingPage from './Pages/LandingPage';
import AssessmentForm from './Pages/AssessmentForm';
import AppProvider from './Context/AppProvider';
import Chart from './Components/Chart';
import Home from './Pages/Home';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user-info" element={<UserInfo />} />
            <Route path="/home" element={<Home />} />
            <Route path="/assessment" element={<AssessmentForm />} />
            <Route path="/chart" element={<Chart />} />

          </Routes>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
