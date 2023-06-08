import './App.css';
import Header from './Components/Header.js'
import Home from './Home.js'
import Checkout from './Checkout.js'
import Login from './Login.js'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import { Switch } from '@mui/material';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="login" element={<Login />}/>
          
        </Routes>
      </div>
    </BrowserRouter>   
  );
}

export default App;

