import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';

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

        {/* Página de Single Product */}
        <Route path="/product" element={<SingleProduct />} />  {/* Pode retirar essa linha depois que os produtos forem implemntados, foi apenas teste */}
        <Route path="/product/:productId" element={<SingleProduct />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
