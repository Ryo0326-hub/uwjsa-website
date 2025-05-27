import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import sakura from "./assets/sakura.jpeg";

// Cherry Blossom Petals Component
function CherryBlossomPetals() {
  return (
    <div className="cherry-blossom-container">
      {Array.from({ length: 15 }, (_, i) => (
        <img
          key={i}
          src={sakura}
          alt="Cherry blossom petal"
          className="cherry-petal-image"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        {/* Cherry blossom petals animation */}
        <CherryBlossomPetals />

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
    </LanguageProvider>
  );
}


