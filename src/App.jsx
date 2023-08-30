import Header from "./components/Header.jsx";
import ProductCard from "./components/ProductCard.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";
function App() {

  return (
    <>
        <Header />
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/cart"} element={<Cart />} />
        </Routes>
    </>
  )
}

export default App
