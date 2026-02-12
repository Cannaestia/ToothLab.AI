import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import SEO from '../components/SEO';

export default function PricingPage() {
  return (
    <>
      <SEO
        title="Pricing & Plans - ToothLab.Ai | Affordable Dental Lab Services"
        description="Transparent pricing for premium dental lab services. Choose from flexible subscription plans or pay-as-you-go. Crowns from $89, bridges, dentures & more. No hidden fees."
        keywords="dental lab pricing, dental crown cost, dental bridge cost, dental lab subscription, affordable dental lab, dental restoration pricing, CAD/CAM pricing"
        canonicalUrl="https://toothlab.ai/pricing"
      />
      <Pricing />
      <CTA />
    </>
  );
}
