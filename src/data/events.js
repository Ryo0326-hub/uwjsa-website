import mahjan from "../assets/majan.jpg";
import majan3 from "../assets/majan3.png";
import hanami from "../assets/hanami1.jpg";
import fundraise1 from "../assets/fundraising.jpg";
import cranecafe from "../assets/cranecafe.png";
import volleyballtournament from "../assets/volleyballtournament.png";
import shoplift from "../assets/shoplift.jpg";
import run5k from "../assets/5krun.png";

// Japanese holidays and celebrations to add to calendar
export const japaneseHolidays = [
  // 2024 Japanese holidays
  { date: "2024-01-01", name: "New Year's Day", nameJp: "元日" },
  { date: "2024-01-08", name: "Coming of Age Day", nameJp: "成人の日" },
  { date: "2024-02-11", name: "National Foundation Day", nameJp: "建国記念の日" },
  { date: "2024-02-12", name: "National Foundation Day (Observed)", nameJp: "建国記念の日（振替休日）" },
  { date: "2024-02-23", name: "Emperor's Birthday", nameJp: "天皇誕生日" },
  { date: "2024-03-20", name: "Vernal Equinox Day", nameJp: "春分の日" },
  { date: "2024-04-29", name: "Showa Day", nameJp: "昭和の日" },
  { date: "2024-05-03", name: "Constitution Memorial Day", nameJp: "憲法記念日" },
  { date: "2024-05-04", name: "Greenery Day", nameJp: "みどりの日" },
  { date: "2024-05-05", name: "Children's Day", nameJp: "こどもの日" },
  { date: "2024-05-06", name: "Children's Day (Observed)", nameJp: "こどもの日（振替休日）" },
  { date: "2024-07-15", name: "Marine Day", nameJp: "海の日" },
  { date: "2024-08-11", name: "Mountain Day", nameJp: "山の日" },
  { date: "2024-08-12", name: "Mountain Day (Observed)", nameJp: "山の日（振替休日）" },
  { date: "2024-09-16", name: "Respect for the Aged Day", nameJp: "敬老の日" },
  { date: "2024-09-22", name: "Autumnal Equinox Day", nameJp: "秋分の日" },
  { date: "2024-09-23", name: "Autumnal Equinox Day (Observed)", nameJp: "秋分の日（振替休日）" },
  { date: "2024-10-14", name: "Sports Day", nameJp: "スポーツの日" },
  { date: "2024-11-03", name: "Culture Day", nameJp: "文化の日" },
  { date: "2024-11-04", name: "Culture Day (Observed)", nameJp: "文化の日（振替休日）" },
  { date: "2024-11-23", name: "Labor Thanksgiving Day", nameJp: "勤労感謝の日" },

  // 2025 Japanese holidays
  { date: "2025-01-01", name: "New Year's Day", nameJp: "元日" },
  { date: "2025-01-13", name: "Coming of Age Day", nameJp: "成人の日" },
  { date: "2025-02-11", name: "National Foundation Day", nameJp: "建国記念の日" },
  { date: "2025-02-23", name: "Emperor's Birthday", nameJp: "天皇誕生日" },
  { date: "2025-02-24", name: "Emperor's Birthday (Observed)", nameJp: "天皇誕生日（振替休日）" },
  { date: "2025-03-21", name: "Vernal Equinox Day", nameJp: "春分の日" },
  { date: "2025-04-29", name: "Showa Day", nameJp: "昭和の日" },
  { date: "2025-05-03", name: "Constitution Memorial Day", nameJp: "憲法記念日" },
  { date: "2025-05-04", name: "Greenery Day", nameJp: "みどりの日" },
  { date: "2025-05-05", name: "Children's Day", nameJp: "こどもの日" },
  { date: "2025-05-06", name: "Children's Day (Observed)", nameJp: "こどもの日（振替休日）" },
  { date: "2025-07-21", name: "Marine Day", nameJp: "海の日" },
  { date: "2025-08-11", name: "Mountain Day", nameJp: "山の日" },
  { date: "2025-09-15", name: "Respect for the Aged Day", nameJp: "敬老の日" },
  { date: "2025-09-23", name: "Autumnal Equinox Day", nameJp: "秋分の日" },
  { date: "2025-10-13", name: "Sports Day", nameJp: "スポーツの日" },
  { date: "2025-11-03", name: "Culture Day", nameJp: "文化の日" },
  { date: "2025-11-23", name: "Labor Thanksgiving Day", nameJp: "勤労感謝の日" },
  { date: "2025-11-24", name: "Labor Thanksgiving Day (Observed)", nameJp: "勤労感謝の日（振替休日）" },

  // Traditional celebrations
  { date: "2024-02-03", name: "Setsubun", nameJp: "節分" },
  { date: "2024-03-03", name: "Hinamatsuri (Girls' Day)", nameJp: "ひな祭り" },
  { date: "2024-07-07", name: "Tanabata", nameJp: "七夕" },
  { date: "2024-08-13", name: "Obon (start)", nameJp: "お盆" },
  { date: "2024-11-15", name: "Shichi-Go-San", nameJp: "七五三" },
  { date: "2024-12-31", name: "New Year's Eve", nameJp: "大晦日" },
  { date: "2025-02-03", name: "Setsubun", nameJp: "節分" },
  { date: "2025-03-03", name: "Hinamatsuri (Girls' Day)", nameJp: "ひな祭り" },
  { date: "2025-07-07", name: "Tanabata", nameJp: "七夕" },
  { date: "2025-08-13", name: "Obon (start)", nameJp: "お盆" },
  { date: "2025-11-15", name: "Shichi-Go-San", nameJp: "七五三" },
  { date: "2025-12-31", name: "New Year's Eve", nameJp: "大晦日" },
];

export const upcoming = [
  {
    id: 1,
    title: "Onigiri Potluck Event (Members-only)",
    titleJp: "おにぎり持ち寄り会（会員限定）",
    date: "2025-06-22T18:00:00",
    description: "Join us for a members-only onigiri potluck event! Bring your favorite onigiri to share with fellow members.",
    descriptionJp: "会員限定のおにぎり持ち寄り会に参加しましょう！お気に入りのおにぎりを持ち寄って、会員同士で共有しましょう。",
    location: "TBD"
  },
  {
    id: 2,
    title: "Games Night x Matcha",
    titleJp: "ゲームナイト × 抹茶",
    date: "2025-06-25T18:00:00",
    description: "Enjoy an evening of games and matcha! We'll have various Japanese and Western games available.",
    descriptionJp: "ゲームと抹茶を楽しむ夜！様々な日本と西洋のゲームをご用意しています。",
    location: "EV1"
  },
  {
    id: 3,
    title: "Matcha Cafe Fundraiser",
    titleJp: "抹茶カフェ募金会",
    date: "2025-07-03T10:00:00",
    description: "Support JSA while enjoying delicious matcha treats! All proceeds go towards future JSA events.",
    descriptionJp: "美味しい抹茶スイーツを楽しみながらJSAをサポートしましょう！収益は今後のJSAイベントに使われます。",
    location: "SLC Marketplace"
  },
  {
    id: 4,
    title: "Tanabata",
    titleJp: "七夕",
    date: "2025-07-07T17:00:00",
    description: "Celebrate the Star Festival with us! Write your wishes on tanzaku and hang them on our bamboo tree.",
    descriptionJp: "七夕祭りを一緒に祝いましょう！短冊に願い事を書いて、笹の木に飾りましょう。",
    location: "TBD"
  },
  {
    id: 5,
    title: "Natsumatsuri - Summer Festival",
    titleJp: "夏祭り",
    date: "2025-07-24T16:00:00",
    description: "Experience a traditional Japanese summer festival with games, food, and performances!",
    descriptionJp: "ゲーム、食べ物、パフォーマンスで日本の伝統的な夏祭りを体験しましょう！",
    location: "TBD"
  },
  {
    id: 6,
    title: "End of term Picnic/Bonfire",
    titleJp: "学期末ピクニック/キャンプファイヤー",
    date: "2025-07-30T17:00:00",
    description: "Join us for a fun end-of-term celebration with a picnic and bonfire!",
    descriptionJp: "ピクニックとキャンプファイヤーで楽しい学期末のお祝いをしましょう！",
    location: "TBD"
  }
];

export const past = [
  {
    id: 7,
    title: "JSA x Movie Watchers Club Asian Heritage Month Movie Night: Shoplifters",
    titleJp: "JSA x ムービーウォッチャーズクラブ アジア文化月間映画鑑賞会：万引き家族",
    date: "June 6th 2025",
    img: shoplift,
    instagramUrl: "https://www.instagram.com/p/DKZy8b6O5-d/"
  },
  {
    id: 6,
    title: "K run / Walk Fundraiser",
    titleJp: "Kラン・ウォーク募金会",
    date: "May 30th 2025",
    img: run5k,
    instagramUrl: "https://www.instagram.com/p/DKNDZ8_OdMa/?img_index=1"
  },
  {
    id: 5,
    title: "UW JSA Volleyball Tournament",
    titleJp: "UW JSA バレーボール大会",
    date: "May 24th 2025",
    img: volleyballtournament,
    instagramUrl: "https://www.instagram.com/p/DJkZ8QxR9I8/"
  },
  {
    id: 4,
    title: "JSA RMUW Speakeasy Mahjong event",
    titleJp: "JSA RMUW スピークイージー麻雀イベント",
    date: "May 15th 2025",
    img: majan3,
    instagramUrl: "https://www.instagram.com/p/DJhKLvxuxQj/?img_index=1"
  },
  {
    id: 3,
    title: "S25 Kickoff Hanami",
    titleJp: "S25 キックオフ花見",
    date: "May 13th 2025",
    img: hanami,
    instagramUrl: "https://www.instagram.com/p/DJ1qP-xu8am/?img_index=1"
  },
  {
    id: 2,
    title: "UW Make-a-wish Crane Cafe",
    titleJp: "UW メイク・ア・ウィッシュ 鶴カフェ",
    date: "March 25th 2025",
    img: cranecafe,
    instagramUrl: "https://www.instagram.com/p/DHeOROpyS2J/"
  },
  {
    id: 1,
    title: "Japanese Snack Fundraiser",
    titleJp: "日本菓子の募金会",
    date: "February 28th 2025",
    img: fundraise1,
    instagramUrl: "https://www.instagram.com/p/DGeRG-Nue3w/"
  }
];
