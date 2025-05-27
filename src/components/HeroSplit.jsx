// src/components/HeroSplit.jsx
import logo from "../assets/wusa.png";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import { useLanguage } from "../context/LanguageContext";

export default function HeroSplit() {
  const { language } = useLanguage();

  const currentBanner = language === 'jp' ? banner2 : banner1;

  return (
    <section
      className="w-full py-16 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${currentBanner})` }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* centring wrapper */}
      <div className="relative z-10 mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 px-4">
        {/* heading block */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-none text-center md:text-left text-white drop-shadow-lg">
          UW<br />JSA
        </h1>

        {/* logo block */}
        <img
          src={logo}
          alt="UWJSA logo"
          className="h-28 sm:h-36 md:h-60 lg:h-72 w-auto object-contain drop-shadow-lg"
        />
      </div>
    </section>
  );
}



