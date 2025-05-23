import wusa from "../assets/wusalogo.png";
import { useLanguage } from "../context/LanguageContext";

export default function Sponsors() {
  const { language } = useLanguage();
  
  return (
    <section className="w-full py-6 bg-white">
      <div className="mx-auto max-w-4xl text-center px-4">
        <h2 className="mb-4 text-2xl font-semibold text-black">
          {language === 'en' ? 'Our Sponsors' : 'スポンサー'}
        </h2>
        <img
          src={wusa}
          alt="WUSA"
          className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto mx-auto object-contain"
        />
      </div>
    </section>
  );
}


