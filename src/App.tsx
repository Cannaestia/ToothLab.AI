import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import PriceListPage from './pages/PriceListPage';
import AboutPage from './pages/AboutPage';
import GetStartedPage from './pages/GetStartedPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import TrainingPage from './pages/TrainingPage';
import WorkflowVisualPage from './pages/WorkflowVisualPage';
import ScanQCTrainingPage from './pages/ScanQCTrainingPage';
import SeazonaWorkticketPage from './pages/SeazonaWorkticketPage';
import MembersPage from './pages/MembersPage';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import UgreenNasSetupPage from './pages/UgreenNasSetupPage';
import FolderStructurePage from './pages/FolderStructurePage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/price-list" element={<PriceListPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/workflow" element={<WorkflowVisualPage />} />
          <Route path="/scan-qc-training" element={<ScanQCTrainingPage />} />
          <Route path="/seazona-workticket" element={<SeazonaWorkticketPage />} />
          <Route path="/ugreen-nas-setup" element={<UgreenNasSetupPage />} />
          <Route path="/folder-structure" element={<FolderStructurePage />} />
          <Route path="/members" element={<MembersPage />} />
        </Routes>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
