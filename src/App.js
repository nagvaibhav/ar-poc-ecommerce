import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import ProductListingContainer from "./components/productListingComponent";
import RecommendedItems from "./components/recommendedItems/recommendedItems";
import Cart from "./components/cartContainer/cartContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="products"
          element={
            <div className="App">
              <header className="App-header">
                <ProductListingContainer />
              </header>
            </div>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/view-in-room" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
