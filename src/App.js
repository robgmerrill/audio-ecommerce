import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SingleProduct from "./components/singleProduct/SingleProduct";
import ScrollToTop from "./helpers/ScrollToTop";
import Cart from "./components/cart/Cart";
import { useGlobalContext } from "./context";
import Checkout from "./pages/Checkout";

//import Training from "./Training";

function App() {
  const {cart, showCart } = useGlobalContext();
  return (
    <div className={ showCart?"App showCart": "App"}>
      <Header />
      <ScrollToTop/>
    {showCart && <Cart/>}  
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="headphones" element={<Headphones />} />
        <Route path="headphones/:slug" element={<SingleProduct/>} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="speakers/:slug" element={<SingleProduct/>} />
        <Route path="earphones" element={<Earphones />} />
        <Route path="earphones/:slug" element={<SingleProduct/>} />
    {cart.items.length !==0 && <Route path="checkout" element={<Checkout/>} />}    
    {cart.items.length ===0 && <Route path="checkout" element={<Home/>} />}    
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
