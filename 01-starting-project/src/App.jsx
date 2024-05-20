import Header from './components/Header';

function App() {
  return (
    <>
      <Header></Header>
      <div id="user-input">
        <div className="input-group">
          <label>
            INTIAL INVESTMENT
            <input type="number" />
          </label>
          <label>
            ANNUAL INVESTMENT
            <input type="number" />
          </label>
        </div>
        <div className="input-group">
          <label>
            INTIAL INVESTMENT
            <input type="number" />
          </label>
          <label>
            ANNUAL INVESTMENT
            <input type="number" />
          </label>
        </div>

        <div id="result"></div>
      </div>
    </>
  );
}

export default App;
