import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './components/Search';
import Header from './components/Header';
import Footer from './components/Footer';
import CategorySection from './components/CategorySection';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        {/* Página Inicial */}
        <Route path="/" element={<Home />} />

        {/* Página de Shop e suas categorias */}
        <Route path="/shop" element={<Search />} />
        <Route path="/shop/:category" element={<Search />} />
      </Routes>
      <CategorySection />

      {/* Exemplo de uso do contador */}
      <Footer />
    </>
  );
}

export default App;
