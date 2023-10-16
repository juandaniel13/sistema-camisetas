import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Shop from "./pages/Shop"
import ShopCategory from "./pages/ShopCategory"
import Product from "./pages/Product" 
import LoginSingUp from "./pages/LoginSingUp"
import Cart from "./pages/Cart"




//ShopCategory,Product,LoginSingUp, Cart
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path ="/" element ={<Shop/>}  />
          <Route path ="/mens" element ={<ShopCategory category="men"/>}  />
          <Route path ="/womens" element ={<ShopCategory category="women"/>}  />
          <Route path ="/kids" element ={<ShopCategory category="kid" />}  />
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>} />
          </Route>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LoginSingUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
