import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComparisonTable from "@/components/ComparisonTable";
import WhatDoesReachDo from "@/components/WhatDoesReachDo";
import BenefitsSection from "@/components/BenefitsSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ComparisonTable />
      <WhatDoesReachDo />
      <BenefitsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
