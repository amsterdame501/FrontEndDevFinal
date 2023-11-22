import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Banner />
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
