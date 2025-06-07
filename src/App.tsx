import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Header from './components/Header';
import Footer from './components/Footer';
import SingleProduct from './pages/SingleProduct';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from './utils/ScrollToTop';

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
