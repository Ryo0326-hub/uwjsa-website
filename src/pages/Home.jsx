import HeroSplit from "../components/HeroSplit";
import Sponsors from "../components/Sponsors";
import UpcomingEvents from "../components/UpcomingEvents";
import PastEvents from "../components/PastEvents";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <HeroSplit />      {/* full-bleed hero */}
      <Sponsors />       {/* full-bleed but inner text centered */}
      <UpcomingEvents />
      <PastEvents />
      <Contact />
    </>
  );
}
