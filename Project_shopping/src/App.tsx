import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Hader';
import GlobalStyles from './components/ResetCss';
import Main from './components/Pages/Main';
import Market from './components/Pages/Market';
import Login from './components/Pages/Login';
import DutchTreat from './components/Pages/DutchTreat';
import Board from './components/Pages/Board';
import Cart from './components/Pages/Cart';
import Search from './components/Pages/Search';

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/market" element={<Market />} />
          <Route path="/dutch-treat" element={<DutchTreat />} />
          <Route path="/board" element={<Board />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
