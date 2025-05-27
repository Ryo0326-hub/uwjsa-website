import { useLanguage } from "../context/LanguageContext";
import firstmeetup from "../assets/firstmeetup.jpg";
import firstmeetup2 from "../assets/firstmeetup2.JPG";

// Team member polaroid card component
function TeamMemberCard({ role, name, isPresident = false }) {
  return (
    <div className="bg-white p-4 shadow-lg transform transition-transform duration-300 hover:rotate-1 -rotate-1" style={{ aspectRatio: '3/4' }}>
      {/* Polaroid photo area */}
      <div className="w-full bg-gray-200 mb-4 flex items-center justify-center" style={{ aspectRatio: '4/3' }}>
        <span className="text-gray-400 text-sm">Photo</span>
      </div>

      {/* Polaroid caption area */}
      <div className="text-center space-y-1">
        <p className="text-sm font-medium text-gray-700">{name}</p>
        <p className="text-xs text-gray-500">{role}</p>
        {isPresident && (
          <div className="mt-2">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
        )}
      </div>
    </div>
  );
}

// Polaroid photo component with string, clip, and swing animation
function PolaroidPhoto({ src, alt, label, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {/* String extending upward */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gray-400"></div>

      {/* Clip */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-4 bg-gradient-to-b from-gray-300 to-gray-500 rounded-sm shadow-md relative">
          {/* Clip details */}
          <div className="absolute inset-x-1 top-0.5 h-0.5 bg-gray-600 rounded"></div>
          <div className="absolute inset-x-1 bottom-0.5 h-0.5 bg-gray-600 rounded"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-gray-600 rounded-full"></div>
        </div>
      </div>

      {/* Polaroid with swing animation */}
      <div className="bg-white p-3 shadow-lg polaroid-swing">
        <img
          src={src}
          alt={alt}
          className="w-full h-48 object-cover"
        />
        <div className="mt-2 text-center">
          <p className="text-red-600 text-lg font-medium">{label}</p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      aboutTitle: "About Us",
      aboutText1: "The University of Waterloo's Japanese Student Association is a club aimed to foster a community connecting students of Japanese heritage, bringing a greater sense of home and family to our members. We are a space to meet others with shared experiences, build lasting friendships, and support one another throughout university life.",
      aboutText2: "In addition to fostering this close-knit community, we also celebrate and share Japanese culture through events and activities. From traditional holiday gatherings and cultural workshops to casual social meetups, we strive to bring people together while introducing aspects of Japanese heritage to the rest of campus.",
      callToAction: "Join us to connect, create meaningful friendships, and be part of a supportive and vibrant community!",
      uwLabel: "University of Waterloo",
      jsaLabel: "Japanese Student Association",
      meetTheTeam: "Meet the Team",
      presidents: "Presidents",
      secretaryAndEvents: "Secretary & Events Head",
      marketingAndComms: "Marketing & Communications Head",
      juniorExecsAndAdvisor: "Junior Execs & Advisor",
      financeHead: "Finance Head"
    },
    jp: {
      aboutTitle: "私たちについて",
      aboutText1: "ウォータールー大学日本人学生会は、日本にルーツを持つ学生同士のコミュニティを育み、メンバーに家族のような温かさと居場所を提供することを目的としたクラブです。共通の体験を持つ仲間と出会い、lasting friendships を築き、大学生活を通してお互いを支え合う場所です。",
      aboutText2: "この密接なコミュニティを育むことに加えて、イベントや活動を通じて日本文化を祝い、共有しています。伝統的な祝日の集まりや文化ワークショップから気軽な社交的な集まりまで、人々を結びつけながらキャンパスの他の人々に日本の文化遺産の側面を紹介することに努めています。",
      callToAction: "私たちと一緒に繋がり、意味のある友情を築き、支援的で活気のあるコミュニティの一員になりましょう！",
      uwLabel: "ウォータールー大学",
      jsaLabel: "日本人学生会",
      meetTheTeam: "チームメンバー",
      presidents: "代表",
      secretaryAndEvents: "秘書・イベント責任者",
      marketingAndComms: "マーケティング・コミュニケーション責任者",
      juniorExecsAndAdvisor: "ジュニア役員・アドバイザー",
      financeHead: "財務責任者"
    }
  };

  const t = content[language];

  // Use darker gradients for both languages to match intensity
  const backgroundGradient = language === 'jp'
    ? 'bg-gradient-to-b from-white via-blue-100 to-blue-200'
    : 'bg-gradient-to-b from-white via-red-100 to-red-200';

  return (
    <div className={`min-h-screen ${backgroundGradient}`}>
      {/* About Us Content Section */}
      <section className="w-full py-16 bg-transparent">
        <div className="mx-auto max-w-4xl px-4">
          {/* Polaroid Photos with hanging string from navbar */}
          <div className="relative mb-12">
            {/* Main horizontal string extending from behind navbar */}
            <div className="absolute -top-20 left-1/4 right-1/4 h-0.5 bg-gray-400 z-0"></div>

            {/* String extending up to behind navbar */}
            <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gray-400 z-0"></div>

            <div className="flex justify-center items-start gap-8 pt-8 flex-wrap relative z-10">
              <PolaroidPhoto
                src={firstmeetup}
                alt="University of Waterloo group photo"
                label={t.uwLabel}
                className="rotate-2"
              />
              <PolaroidPhoto
                src={firstmeetup2}
                alt="Japanese Student Association group photo"
                label={t.jsaLabel}
                className="-rotate-2"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="text-center space-y-6">
            <p className="text-lg leading-relaxed text-gray-800">
              {t.aboutText1}
            </p>

            <p className="text-lg leading-relaxed text-gray-800">
              {t.aboutText2}
            </p>

            <p className="text-lg font-medium italic text-gray-700 mt-8">
              {t.callToAction}
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="w-full py-12 bg-transparent">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-black">
            {t.meetTheTeam}
          </h1>

          {/* Presidents Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-6 text-black">
              {t.presidents}
            </h2>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="w-40">
                <TeamMemberCard role={t.presidents} name="Conan" isPresident={true} />
              </div>
              <div className="w-40">
                <TeamMemberCard role={t.presidents} name="Elly" isPresident={true} />
              </div>
            </div>
          </div>

          {/* Secretary & Events Head Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-6 text-black">
              {t.secretaryAndEvents}
            </h2>
            <div className="flex justify-center gap-6 flex-wrap max-w-6xl mx-auto">
              <div className="w-40">
                <TeamMemberCard role="Secretary" name="Ayaka" />
              </div>
              <div className="w-40">
                <TeamMemberCard role="Events Head" name="Mia" />
              </div>
              <div className="w-40">
                <TeamMemberCard role="Events Head" name="Kai" />
              </div>
              <div className="w-40">
                <TeamMemberCard role="Events Head" name="Sena" />
              </div>
            </div>
          </div>

          {/* Marketing & Communications Head Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-6 text-black">
              {t.marketingAndComms}
            </h2>
            <div className="flex justify-center gap-6 flex-wrap max-w-5xl mx-auto">
              <div className="w-40">
                <TeamMemberCard role="Marketing Head" name="Sidney" />
              </div>
              <div className="w-40">
                <TeamMemberCard role="Marketing Head" name="Kaitlyn" />
              </div>
              <div className="w-40">
                <TeamMemberCard role="Communications Head" name="Manami" />
              </div>
            </div>
          </div>

          {/* Junior Execs & Advisor Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-6 text-black">
              {t.juniorExecsAndAdvisor}
            </h2>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="w-40">
                <TeamMemberCard role="Junior Exec" name="Miu" />
              </div>
              <div className="w-40">
                <TeamMemberCard role="Advisor" name="Max" />
              </div>
            </div>
          </div>

          {/* Finance Head Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-6 text-black">
              {t.financeHead}
            </h2>
            <div className="flex justify-center">
              <div className="w-40">
                <TeamMemberCard role={t.financeHead} name="Ryo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
