import './App.css';
import Game from './components/Game'
import Setup from './components/Setup'

import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom"



function App() {
  return (
    
    <div className="App">
      <h1>BJJ Score Tracker</h1>
      <Router>
      <Link to="/">Setup</Link>
      <Link to="/game">Game</Link>

            <Routes>
            <Route exact path="/" element={<Setup />}></Route>
            <Route path="/Game" element={<Game />}></Route>
                
            </Routes>
      </Router>
    </div>
  );
}

export default App;
