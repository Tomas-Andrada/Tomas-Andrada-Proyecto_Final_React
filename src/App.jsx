import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './componentes/NavBar';
import { ItemListContainer } from './componentes/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';
import { Cart } from './componentes/Cart';
import { CartProvider } from './componentes/CartContext'; // Importa el proveedor del contexto
import { Checkout } from "./componentes/Checkout";
function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <div className="Barra_Superior">
        <NavBar />
      </div> 
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;