import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

function App() {
  return (
    // Routing Table
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
    </Routes>
  );
}

export default App;
