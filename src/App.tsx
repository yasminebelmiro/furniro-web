import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* Rota dinâmica para categorias: dining, living, bedroom */}
        <Route path="/shop/:category" element={<Shop />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
