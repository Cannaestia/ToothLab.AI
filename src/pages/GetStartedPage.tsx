import DemoForm from '../components/DemoForm';
import SEO from '../components/SEO';

export default function GetStartedPage() {
  return (
    <>
      <SEO
        title="Get Started - ToothLab.Ai | Request a Demo & Free Trial"
        description="Start your journey with ToothLab.Ai today. Request a demo, get a free trial, and discover how our AI-powered dental lab services can transform your practice."
        keywords="dental lab demo, dental lab trial, get started dental lab, dental lab signup, dental lab onboarding"
        canonicalUrl="https://toothlab.ai/get-started"
      />
      <DemoForm />
    </>
  );
}
