import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

function App() {
  return (
    // <> 프래그먼트라고한다.
    <>
      <Header></Header>
      <CoreConcepts></CoreConcepts>
      <main>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
