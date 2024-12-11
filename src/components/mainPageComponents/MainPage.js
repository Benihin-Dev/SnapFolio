import React from "react";
import NavBar from "./NavBar";
import HomeContent from "./HomeContent";
import UserDetailsForm from "./UserDetailsForm";
import { useMainPageData } from "./MainPageDataProvider";
import { TempletCollectionProvider } from "./TempletCollectionsProvider";
import { UserInfoProvider } from "./UserInfoProvider";
import PortfolioPreviewSection from "./PortfolioPreviewSection";
import Hero from "./Hero";
import { AnimatedSection } from "./AnimatedSection";
import { PremiumComingSoon } from "./PremiumComingSoon";
// import FreeTemplets from "./FreeTemplets";
import { Pricing } from "./Pricing";
import { AboutNew } from "./AboutNew";
import { Footer } from "./Footer";
import { FreeTemplates } from "./FreeTemplates";
import LoadingComponents from "./formComponents/LoadingComponent";

export default function MainPage() {
  const { activeState } = useMainPageData();

  return (
    <>
      <TempletCollectionProvider>
        <NavBar />
        <div>
          <Hero />
          <div className="max-w-7xl bg-white mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Premium Templates
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Exclusive designs for professionals who want to stand out
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={200}>
              <PremiumComingSoon />
            </AnimatedSection>
          </div>
          <AnimatedSection direction="left">
            <FreeTemplates />
          </AnimatedSection>
          <AnimatedSection direction="right">
            <Pricing />
          </AnimatedSection>
          <AnimatedSection direction="up">
            <AboutNew />
          </AnimatedSection>
        </div>
        <Footer />
      </TempletCollectionProvider>
    </>
  );
}
