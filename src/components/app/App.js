import React from 'react';
import Signup from '../signup/Signup.jsx';
import { Routes, Route } from 'react-router-dom'
import Signin from '../signin/Signin.jsx';
import Home from '../homePage/Home.jsx';


const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App;
