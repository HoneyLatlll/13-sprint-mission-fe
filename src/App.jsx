import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BestProduct from "./components/Bestproduct/BestProduct";
import OnsaleProduct from "./components/Onsaleproduct/OnsaleProduct";
import MarketPage from "./pages/MarketPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <div className="body">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />d
        <Route path="/items" element={<MarketPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
