import Player from './assets/Player';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player1" symbol="X"></Player>
          <Player initialName="player2" symbol="O"></Player>
        </ol>
        Gmae BOARD
      </div>
    </main>
  );
}

export default App;
