import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Birthday from './pages/bday';
import Home from './pages/Home'; 
import Story from './components/Story';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/" element={<SignIn />} />
        <Route path="/story" element={<Story/>}/>
      </Routes>
    </Router>
  );
}

export default App;
