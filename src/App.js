import './App.css';
import React from 'react';
import Header from './Header/Header';
import Advantages from './Advantages/Advantages';
import Statistics from './Statistics/Statistics';
import MapPopap from './Map/MapPopap';
import Presentation from './Presentation/Presentation';
import Discount from './Discount/Discount';
import TypesRegistration from './TypesRegistration/TypesRegistration';
import Points from './Points/Points';
import Driver from './Driver/Driver';
import Question from './Question/Question';
import Expansion from './Expansion/Expansion';
import Futer from './Futer/Futer';
function App() {
  return (
    <div className="App">
      <header className="app-header">
        <Header />
        <Advantages />
        <Statistics />
        <MapPopap />
        <Presentation />
        <Discount />
        <TypesRegistration />
        <Points />
        <Driver/>
        <Question/>
        <Expansion/>
        <Futer/>
      </header>
    </div>
  )
}

export default App;
