import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import ProblemSolution from '../components/ProblemSolution';
import CADShowcase from '../components/CADShowcase';
import RemovablesShowcase from '../components/RemovablesShowcase';
import Testimonials from '../components/Testimonials';
import Trust from '../components/Trust';
import CTA from '../components/CTA';
import Training from '../components/Training';
import FAQ from '../components/FAQ';
import WhatsAppChat from '../components/WhatsAppChat';
import SEO, { organizationSchema } from '../components/SEO';

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <SEO
        title="ToothLab.Ai - AI-Powered Dental Lab Services | Premium Digital Dentistry"
        description="Transform your dental practice with ToothLab.Ai premium digital lab services. Fast turnaround, expert designers, AI-powered workflow. Crowns, bridges, dentures & more delivered in 24-48 hours."
        keywords="dental lab, digital dentistry, dental crowns, dental bridges, CAD/CAM, dental design, AI dental lab, intraoral scanning, dental restoration, same day crowns, dental laboratory services, digital dental lab"
        canonicalUrl="https://toothlab.ai/"
        structuredData={organizationSchema}
      />
      <Hero />
      <HowItWorks />
      <ProblemSolution />
      <WhatsAppChat />
      <CADShowcase />
      <RemovablesShowcase />
      <Testimonials />
      <Trust />
      <FAQ />
      <CTA />
      <Training />
    </>
  );
}
