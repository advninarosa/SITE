/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PhotoProvider } from './context/PhotoContext';
import { PhotoUploaderModal } from './components/PhotoUploaderModal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CalloutBar } from './components/CalloutBar';
import { EmergencyBanner } from './components/EmergencyBanner';
import { ShowcaseCards } from './components/ShowcaseCards';
import { PracticeAreas } from './components/PracticeAreas';
import { WorkflowSteps } from './components/WorkflowSteps';
import { AboutLawyer } from './components/AboutLawyer';
import { DigitalCard } from './components/DigitalCard';
import { UrgencyIntake } from './components/UrgencyIntake';
import { SuccessCases } from './components/SuccessCases';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <PhotoProvider>
      <div className="min-h-screen bg-[#0e0306] text-[#f7f3f0] flex flex-col font-sans selection:bg-[#c8a261] selection:text-[#16040a]">
        {/* Navigation Bar with Official Monogram Logo */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* Reference Banner & Marquee Bar */}
          <CalloutBar />

          {/* Emergency Hotline for Flagrantes & Custódia */}
          <EmergencyBanner />

          {/* 3 Featured Strategy Cards with Photos (Inspired by Reference Layout) */}
          <ShowcaseCards />

          {/* Practice Areas / Áreas de Atuação */}
          <PracticeAreas />

          {/* Defense Methodology & Immediate Response Steps */}
          <WorkflowSteps />

          {/* Quem é Dra. Nina Rosa (Profile, Credentials, Experience) */}
          <AboutLawyer />

          {/* Digital Business Card (Exact replica of Brand Identity Card & Contacts) */}
          <DigitalCard />

          {/* Interactive Case Intake Wizard directly to WhatsApp */}
          <UrgencyIntake />

          {/* Verified Technical Case Victories (anonymized per OAB rules) */}
          <SuccessCases />

          {/* FAQ Accordion */}
          <FaqSection />

          {/* Direct Contact & Locations */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* 24h Floating WhatsApp Quick Contact Button */}
        <FloatingWhatsApp />

        {/* Photo Uploader / Customizer Modal */}
        <PhotoUploaderModal />
      </div>
    </PhotoProvider>
  );
}
