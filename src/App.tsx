import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Search from './components/Search';
import Header from './components/Header';
import Footer from './components/Footer';
import SingleProduct from './pages/SingleProduct';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center" 
        autoClose={3000}    
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light" 
      />
      <Header />
      <Routes>
        {/* Página Inicial */}
        <Route path="/" element={<Home />} />

        {/* Página de Shop e suas categorias */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />

        {/* Página de Single Product */}
        <Route path="/product/:productId" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
