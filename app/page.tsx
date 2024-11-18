import HeroSection from "./components/HeroSection";
import HowToUseSection from "./components/HowToUseSection";
import IngredientsSection from "./components/IngredientsSection";
import IsNessSection from "./components/IsNessSection";
import MadeWithLoveSection from "./components/MadeWithLoveSection";
import MoreInformationSection from "./components/MoreInformationSection";
import PricingSection from "./components/PricingSection";
import QuoteSection from "./components/QuoteSection";
import SafeAndSimpleDeliveryProcessSection from "./components/SafeAndSimpleDeliveryProcessSection";
import SlideShow from "./components/SlideShow";
import WeEmpathize from "./components/WeEmpathize";

export default function Home() {
  return (
    <main className="font-Scripter">
      <HeroSection />
      <MoreInformationSection />
      <WeEmpathize />
      <IngredientsSection />
      <HowToUseSection />
      <QuoteSection />
      <SafeAndSimpleDeliveryProcessSection />
      <PricingSection />
      <MadeWithLoveSection />
      <SlideShow />
      <IsNessSection />
    </main>
  );
}
