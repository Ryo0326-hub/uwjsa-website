import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  // Use dark navy blue in Japanese mode, uwjsa color in English mode
  const footerBgColor = language === 'jp' ? 'bg-slate-900' : 'bg-uwjsa';

  return (
    <footer className={`${footerBgColor} text-white`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4 text-sm">
        <span>&copy; {new Date().getFullYear()} UW Japanese Student Association</span>
      </div>
    </footer>
  );
}
