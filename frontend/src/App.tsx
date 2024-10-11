import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register.tsx';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home';
import NotFound from './pages/NotFound.tsx';
import LoggedIn from './pages/LoggedIn';

import ProtectedRoute from './components/ProtectedRoute.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />
}

function App() {

  return (
    // when logged in
    <BrowserRouter>
      <Routes>
        <Route path="/logged-in" element={
          <ProtectedRoute>
            <LoggedIn />
          </ProtectedRoute>
        } />

        { /* not logged in  */}

        <Route path="/" element={ <Home /> }></Route>

        <Route path="/login" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/Logout" element={<Logout />} />

        <Route path="/register" element={<RegisterAndLogout />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
