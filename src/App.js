import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Auth/Login/Login';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </div>
  );
}

export default App;
