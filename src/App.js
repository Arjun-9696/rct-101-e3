import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
      <Home/>
        {/* <Login /> */}
        {/* <Home/>
         */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/products"
            element={
              
                <Products />
             
            }
          />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
