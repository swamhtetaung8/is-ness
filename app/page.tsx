import HeroSection from "./components/HeroSection";
import HowToUseSection from "./components/HowToUseSection";
import IngredientsSection from "./components/IngredientsSection";
import MoreInformationSection from "./components/MoreInformationSection";
import PricingSection from "./components/PricingSection";
import QuoteSection from "./components/QuoteSection";
import SafeAndSimpleDeliveryProcessSection from "./components/SafeAndSimpleDeliveryProcessSection";

export default function Home() {
  return (
    <main className="font-Scripter">
      <HeroSection />
      <MoreInformationSection />
      <IngredientsSection />
      <HowToUseSection />
      <QuoteSection />
      <SafeAndSimpleDeliveryProcessSection />
      <PricingSection />
    </main>
  );
}
