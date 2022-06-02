
import CategoryPage from "./pages/CategoryPage";

import Home from "./pages/Home";
import Login from "./pages/Login";

import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

import ProductPages from "./pages/ProductPages";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/product" element={<ProductPages/>}/>
        <Route path="/categorypage" element={<CategoryPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
