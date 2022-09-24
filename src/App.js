import './App.css';
import Player from './Player';

import Countdown from 'react-countdown';

function App() {
  return (
    <div className="App">
      <h1>BJJ Score Tracker</h1>
      <Countdown date={Date.now() + 300000} />
      
      <Player player="Player 1" />
      <Player player="Player 2" />

      
    </div>
  );
}

export default App;
