import { useLanguage } from "../context/LanguageContext";
import firstmeetup from "../assets/firstmeetup.jpg";
import firstmeetup2 from "../assets/firstmeetup2.JPG";

// Team member polaroid card component
function TeamMemberCard({ role, name, photo, isPresident = false }) {
  return (
    <div className="bg-white p-4 shadow-lg transform transition-transform duration-300 hover:rotate-1 -rotate-1" style={{ aspectRatio: '3/4' }}>
      {/* Polaroid photo area */}
      <div className="w-full bg-gray-200 mb-4 flex items-center justify-center overflow-hidden" style={{ aspectRatio: '1/1' }}>
        <img
          src={photo}
          alt={`${name} - ${role}`}
          className="w-full h-full object-cover"
        />
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

// Simple polaroid photo component without strings and clips
function PolaroidPhoto({ src, alt, label, className = "" }) {
  return (
    <div className={`bg-white p-3 shadow-lg transform transition-transform duration-300 hover:scale-105 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover"
      />
      <div className="mt-2 text-center">
        <p className="text-black-600 text-lg font-medium">{label}</p>
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

  const t = {
    ...content[language],
    roles: {
      coPresident: {
        en: "Co-President",
        jp: "共同代表"
      },
      headOfEvents: {
        en: "Head of Events",
        jp: "イベント部長"
      },
      eventsCoordinator: {
        en: "Events Coordinator",
        jp: "イベントコーディネーター"
      },
      headOfMarketing: {
        en: "Head of Marketing",
        jp: "マーケティング部長"
      },
      commsAndGrowth: {
        en: "Comms & Growth Coordinator",
        jp: "広報・成長コーディネーター"
      },
      juniorExecutive: {
        en: "Junior Executive",
        jp: "ジュニアエグゼクティブ"
      },
      treasurer: {
        en: "Treasurer",
        jp: "会計"
      },
      headOfFinance: {
        en: "Head of Finance",
        jp: "財務部長"
      }
    }
  };

  // Helper function to get translated role
  const getTranslatedRole = (roleKey) => {
    return t.roles[roleKey][language === 'en' ? 'en' : 'jp'];
  };

  // Use darker gradients for both languages to match intensity
  const backgroundGradient = language === 'jp'
    ? 'bg-gradient-to-b from-white via-blue-100 to-blue-200'
    : 'bg-gradient-to-b from-white via-red-100 to-red-200';

  return (
    <div className={`min-h-screen ${backgroundGradient}`}>
      {/* About Us Content Section */}
      <section className="w-full py-16 bg-transparent">
        <div className="mx-auto max-w-4xl px-4">
          {/* Polaroid Photos */}
          <div className="mb-12">
            <div className="flex justify-center items-start gap-8 pt-8 flex-wrap">
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
              {language === 'en' ? 'Co-Presidents' : '共同代表'}
            </h2>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="w-48">
                <TeamMemberCard 
                  role={getTranslatedRole('coPresident')}
                  name="Elly" 
                  photo={import.meta.env.BASE_URL + "src/assets/elly.jpg"}
                  isPresident={true} 
                />
              </div>
              <div className="w-48">
                <TeamMemberCard 
                  role={getTranslatedRole('coPresident')}
                  name="Conan" 
                  photo={import.meta.env.BASE_URL + "src/assets/conan.png"}
                  isPresident={true} 
                />
              </div>
            </div>
          </div>

          {/* Events Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-6 text-black">
              {language === 'en' ? 'Events' : 'イベント'}
            </h2>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="w-48">
                <TeamMemberCard 
                  role={getTranslatedRole('headOfEvents')}
                  name="Sena" 
                  photo={import.meta.env.BASE_URL + "src/assets/sena.jpg"}
                />
              </div>
              <div className="w-48">
                <TeamMemberCard 
                  role={getTranslatedRole('headOfEvents')}
                  name="Mia" 
                  photo={import.meta.env.BASE_URL + "src/assets/mia_stieda.jpg"}
                />
              </div>
              <div className="w-48">
                <TeamMemberCard 
                  role={getTranslatedRole('headOfEvents')}
                  name="Kai" 
                  photo={import.meta.env.BASE_URL + "src/assets/kai_tofflemire.jpg"}
                />
              </div>
              <div className="w-48">
                <TeamMemberCard 
                  role={getTranslatedRole('eventsCoordinator')}
                  name="Ian" 
                  photo={import.meta.env.BASE_URL + "src/assets/Ian_woodmansey.jpg"}
                />
              </div>
            </div>
          </div>

          {/* Marketing & Communications Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-6 text-black">
              {language === 'en' ? 'Marketing & Communications' : 'マーケティング・広報'}
            </h2>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="w-48">
                <TeamMemberCard 
                  role={getTranslatedRole('headOfMarketing')}
                  name="Kaitlyn" 
                  photo={import.meta.env.BASE_URL + "src/assets/Kaitlyn.jpg"}
                />
              </div>
              <div className="w-48">
                <TeamMemberCard 
                  role={getTranslatedRole('commsAndGrowth')}
                  name="Tristen" 
                  photo={import.meta.env.BASE_URL + "src/assets/tristen.jpg"}
                />
              </div>
            </div>
          </div>

          {/* Junior Executives Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-6 text-black">
              {language === 'en' ? 'Junior Executives' : 'ジュニアエグゼクティブ'}
            </h2>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="w-48">
                <TeamMemberCard 
                  role={getTranslatedRole('juniorExecutive')}
                  name="Miu" 
                  photo={import.meta.env.BASE_URL + "src/assets/miu.jpg"}
                />
              </div>
              <div className="w-48">
                <TeamMemberCard 
                  role={getTranslatedRole('juniorExecutive')}
                  name="Brittany" 
                  photo={import.meta.env.BASE_URL + "src/assets/brittany.jpg"}
                />
              </div>
            </div>
          </div>

          {/* Finance Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center mb-6 text-black">
              {language === 'en' ? 'Finance' : '財務'}
            </h2>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="w-48">
                <TeamMemberCard 
                  role={getTranslatedRole('treasurer')}
                  name="Ayaka" 
                  photo={import.meta.env.BASE_URL + "src/assets/ayaka_tazumi.jpg"}
                />
              </div>
              <div className="w-48">
                <TeamMemberCard 
                  role={getTranslatedRole('headOfFinance')}
                  name="Ryo" 
                  photo={import.meta.env.BASE_URL + "src/assets/ryo.jpg"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
