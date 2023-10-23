import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Shop from "./pages/Shop"
import ShopCategory from "./pages/ShopCategory"
import Product from "./pages/Product" 
import LoginSingUp from "./pages/LoginSingUp"
import Cart from "./pages/Cart"
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/assets/nav_bar_media/carro.png"
import women_banner from "./Components/assets/nav_bar_media/carro.png"
import kid_banner from "./Components/assets/nav_bar_media/carro.png"





//ShopCategory,Product,LoginSingUp, Cart
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path ="/" element ={<Shop/>}  />
          <Route path ="/mens" element ={<ShopCategory  banner={men_banner} category="men"/>}  />
          <Route path ="/womens" element ={<ShopCategory banner={women_banner} category="women"/>}  />
          <Route path ="/kids" element ={<ShopCategory banner={kid_banner} category="kid" />}  />
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>} />
          </Route>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LoginSingUp/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
