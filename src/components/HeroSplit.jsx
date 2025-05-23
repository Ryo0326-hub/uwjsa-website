// src/components/HeroSplit.jsx
import logo from "../assets/wusa.png";
import { useLanguage } from "../context/LanguageContext";

export default function HeroSplit() {
  const { language } = useLanguage();
  
  return (
    <section className="w-full py-8">
      {/* centring wrapper */}
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 px-4">
        {/* heading block */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-none text-center md:text-left">
          UW<br />JSA
        </h1>

        {/* logo block */}
        <img
          src={logo}
          alt="UWJSA logo"
          className="h-28 sm:h-36 md:h-60 lg:h-72 w-auto object-contain"
        />
      </div>
    </section>
  );
}



