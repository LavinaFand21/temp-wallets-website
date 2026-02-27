import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import FeaturesSection from "@/components/landing/FeaturesSection";
import WhySection from "@/components/landing/WhySection";
import OpenSourceSection from "@/components/landing/OpenSourceSection";
import SocialProof from "@/components/landing/SocialProof";
import PartnersSection from "@/components/landing/PartnersSection";
import RoadmapSection from "@/components/landing/RoadmapSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <WhySection />
      <OpenSourceSection />
      <SocialProof />
      <PartnersSection />
      <RoadmapSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
