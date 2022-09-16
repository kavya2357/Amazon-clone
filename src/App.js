import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import Checkout from './Checkout.js'
import {BrowserRouter, Routes,Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          {/* <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>


        {/* <Header />
        <Home /> */}
      </div>
    </BrowserRouter>
    
  );
}

export default App;

