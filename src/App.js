import React from 'react';
import NavBar from './components/NavBar.js';
import FirstPromotion from './components/FirstPromotion.js';
import SecondPromotion from './components/SecondPromotion.js';
import ThirdPromotion from './components/ThirdPromotion.js';
import FourthPromotion from './components/FourthPromotion.js';
import FivethPromotion from './components/FivethPromotion.js';
import SixthPromotion from './components/SixthPromotion.js';

function App() {
  return (
    <div>
      <NavBar /> 
      <FirstPromotion />
      <SecondPromotion />
      <ThirdPromotion />
      <FourthPromotion />
      <FivethPromotion />
      <SixthPromotion />
    </div>
  );
}

export default App;
