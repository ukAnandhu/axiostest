import BestSeller from "@/components/BestSeller";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LatestCollections from "@/components/LatestCollection";
import PolicySection from "@/components/PolicySection";
import SubscribeSection from "@/components/SubscribeSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <LatestCollections />
      <BestSeller />
      <PolicySection />
      <SubscribeSection />
    </div>

  );

}
