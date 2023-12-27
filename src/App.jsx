import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./cssfiles/fonts.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import store from "./store";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Basics from "./pages/catalogue-pages/Basics";
import Buy from "./pages/Buy";
import Graphics_Printed from "./pages/catalogue-pages/Graphics_Printed";
import Floral from "./pages/catalogue-pages/Floral";
import Limited_collection from "./pages/Limited_collection";
import Cataloguepage from "./pages/Cataloguepage";
import Pay from "./pages/Pay";
import TandC from "./components/TandC";
import ReturnExchange from "./components/ReturnExchange";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Order from "./pages/Order";
import PricacyPolicy from "./components/PricacyPolicy";
import ShippingPolicy from "./components/ShippingPolicy";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/terms-conditions" element={<TandC />} />
          <Route path="/return-exchange" element={<ReturnExchange />} />
          <Route path="/privacy-policy" element={<PricacyPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/Basics" element={<Basics />} />
          <Route path="/Oversized" element={<Graphics_Printed />} />
          <Route path="/Polo" element={<Floral />} />
          <Route path="/BuyPage" element={<Buy />} />
          <Route path="/limited-collection" element={<Limited_collection />} />
          <Route path="/allproducts" element={<Cataloguepage />} />
          <Route path="/pay" element={<Pay />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
