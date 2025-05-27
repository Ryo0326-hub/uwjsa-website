import mahjan from "../assets/majan.jpg";
import majan3 from "../assets/majan3.png";
import hanami from "../assets/hanami1.jpg";
import fundraise1 from "../assets/fundraising.jpg";
import cranecafe from "../assets/cranecafe.png";
import volleyballtournament from "../assets/volleyballtournament.png";

// Japanese holidays and celebrations to add to calendar
export const japaneseHolidays = [
  // 2025 Japanese holidays
  { date: "2025-01-01", name: "New Year's Day", nameJp: "元日" },
  { date: "2025-01-13", name: "Coming of Age Day", nameJp: "成人の日" },
  { date: "2025-02-11", name: "National Foundation Day", nameJp: "建国記念の日" },
  { date: "2025-02-23", name: "Emperor's Birthday", nameJp: "天皇誕生日" },
  { date: "2025-03-20", name: "Vernal Equinox Day", nameJp: "春分の日" },
  { date: "2025-04-29", name: "Showa Day", nameJp: "昭和の日" },
  { date: "2025-05-03", name: "Constitution Memorial Day", nameJp: "憲法記念日" },
  { date: "2025-05-04", name: "Greenery Day", nameJp: "みどりの日" },
  { date: "2025-05-05", name: "Children's Day", nameJp: "こどもの日" },
  { date: "2025-07-21", name: "Marine Day", nameJp: "海の日" },
  { date: "2025-08-11", name: "Mountain Day", nameJp: "山の日" },
  { date: "2025-09-15", name: "Respect for the Aged Day", nameJp: "敬老の日" },
  { date: "2025-09-23", name: "Autumnal Equinox Day", nameJp: "秋分の日" },
  { date: "2025-10-13", name: "Sports Day", nameJp: "スポーツの日" },
  { date: "2025-11-03", name: "Culture Day", nameJp: "文化の日" },
  { date: "2025-11-23", name: "Labor Thanksgiving Day", nameJp: "勤労感謝の日" },

  // Traditional celebrations
  { date: "2025-02-03", name: "Setsubun", nameJp: "節分" },
  { date: "2025-03-03", name: "Hinamatsuri (Girls' Day)", nameJp: "ひな祭り" },
  { date: "2025-07-07", name: "Tanabata", nameJp: "七夕" },
  { date: "2025-08-13", name: "Obon (start)", nameJp: "お盆" },
  { date: "2025-11-15", name: "Shichi-Go-San", nameJp: "七五三" },
  { date: "2025-12-31", name: "New Year's Eve", nameJp: "大晦日" },
];

export const upcoming = [];

export const past = [
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
