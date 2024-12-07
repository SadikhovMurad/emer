import { Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from "./components/navbar";
// import HomePage from "./pages/home";
import Footer from "./components/footer";
import CompanyPage from "./pages/company";
import HomePage from "./pages/home";
import SupportPage from "./pages/support";
import DriverPage from "./pages/driver";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route index element={<HomePage/>} />
          <Route path="company" element={<CompanyPage />}/>
          <Route path="support" element={<SupportPage />}/>
          <Route path="driver" element={<DriverPage />}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
