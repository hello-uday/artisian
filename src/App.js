import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Loginpage from './pages/login/Loginpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </Router>
  );
};

export default App;
