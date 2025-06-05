import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Search from './components/Search';
import Header from './components/Header';
import Footer from './components/Footer';
import CategorySection from './components/CategorySection';

function App() {

  return (
    <>
      <Header />
      <Routes>
        {/* Página Inicial */}
        <Route path="/" element={<Home />} />

        {/* Página de Shop e suas categorias */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
