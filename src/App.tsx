import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './pages/Shop';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        {/* Página Inicial */}
        <Route path="/" element={<Home />} />

        {/* Página de Shop e suas categorias */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
