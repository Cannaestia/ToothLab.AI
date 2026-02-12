import About from '../components/About';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About ToothLab.Ai - AI-Powered Digital Dental Laboratory"
        description="Learn about ToothLab.Ai, the leading AI-powered dental laboratory revolutionizing digital dentistry with expert designers, cutting-edge technology, and exceptional service."
        keywords="about toothlab, dental lab company, digital dental lab, dental technology, AI dental lab, dental lab team, dental lab services"
        canonicalUrl="https://toothlab.ai/about"
      />
      <About />
    </>
  );
}
