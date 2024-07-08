import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ClickedValuesProvider } from './Context/ClickedValuesContext';
import GameBoard from './components/GameBoard';  
import ValuePage from './components/ValuePage'; 
import './App.css';
import './fonts.css';
import bgimage from './img/geopardy.jpg';

function App() {
  const [GameBoardVisible, setGameBoardVisible] = useState(false);

  const handleClick = () => {
    setGameBoardVisible(true);
  };

  return (
    <ClickedValuesProvider>
      <Router>
        <div className="App">
          <div className="start-game-container">
            <div className={`start-game-content ${GameBoardVisible ? 'hidden' : ''}`}>
              <div className="justify-center items-center min-h-screen flex" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1
                  className='text-yellow-400 text-9xl text-center' 
                  style={{ fontFamily: 'Geoparody, sans-serif', fontWeight: 'bold', lineHeight: '1' }}
                >
                  Geopardy
                </h1>
                <button
                  className="button mt-80"
                  onClick={handleClick}
                  style={{ fontFamily: 'Geoparody, sans-serif', fontWeight: 'bold' }}
                >
                  Start Game
                </button>
              </div>
            </div>

            <div className={`game-board-container ${GameBoardVisible ? 'visible' : ''}`}>
              <Routes>
                <Route path="/" element={<GameBoard />} />
                <Route path="/value/:category/:value" element={<ValuePage />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </ClickedValuesProvider>
  );
}

export default App;
