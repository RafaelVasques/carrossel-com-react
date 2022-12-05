import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { AuthProvider } from './contexts/auth';
import MoviesPage from './pages/movies';
import LoginPage from './pages/login';
import './reset.css';

function App() {

  return (<>
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<LoginPage />} />
        <Route path="/" element={<MoviesPage />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  </>);

}

export default App;
