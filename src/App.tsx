import React from 'react';
import './App.css';
import { Form } from './components/form/Form';
import { Game } from './components/game/Game';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EndGame } from './components/game/endGame/EndGame';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SaveResults } from './components/game/saveResults/SaveResults';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/game" element={<Game />} />
          <Route path="/endgame" element={<EndGame />} />
          <Route path="/save-results" element={<SaveResults />} />
        </Routes>
        <ToastContainer position="top-center" theme="light" />
      </BrowserRouter>
    </div>
  );
}

export default App;
