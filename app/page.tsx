import HeroSection from "./components/HeroSection";
import HowToUseSection from "./components/HowToUseSection";
import IngredientsSection from "./components/IngredientsSection";
import MoreInformationSection from "./components/MoreInformationSection";

export default function Home() {
  return (
    <main className="font-Scripter">
      <HeroSection />
      <MoreInformationSection />
      <IngredientsSection />
      <HowToUseSection />
    </main>
  );
}
