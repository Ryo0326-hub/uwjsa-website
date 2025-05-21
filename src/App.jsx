import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"; // create a placeholder for now
import Footer from "./components/Footer"; // optional

export default function App() {
  return (
    <BrowserRouter>
      {/* flex column wrapper */}
      <div className="min-h-screen flex flex-col bg-white text-black">
        <Navbar />

        {/* main grows to fill leftover height */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

