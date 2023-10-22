import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Playermaker from '../src/Playermaker/playermade';


function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/playermaker" element={<Playermaker />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
