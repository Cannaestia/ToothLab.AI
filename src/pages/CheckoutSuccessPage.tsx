import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Loader2, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CheckoutSuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (sessionId) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } else {
      setError('No session ID found');
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-200 text-center">
              <Loader2 className="w-16 h-16 animate-spin mx-auto text-[#0073EA] mb-4" />
              <p className="text-xl text-gray-600">Processing your payment...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-12 border border-red-200 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✗</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong</h1>
              <p className="text-gray-600 mb-8">{error}</p>
              <Link
                to="/pricing"
                className="inline-block px-8 py-3 bg-[#0073EA] text-white rounded-full font-semibold hover:bg-[#0063CA] transition-all"
              >
                Back to Pricing
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-200 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Payment Successful!
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Welcome to ToothLab AI! Your subscription is now active.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 mb-8 text-left">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What's Next?</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Check your email for your subscription confirmation and receipt</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Access your account dashboard to upload your first scan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Get started with our Quick Start Guide</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Join our WhatsApp support channel for real-time assistance</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-started"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0073EA] to-[#00CA72] text-white rounded-full text-lg font-bold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-full text-lg font-bold hover:bg-gray-50 transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-bold text-gray-900 mb-2 text-center">Need Help?</h3>
            <p className="text-sm text-gray-700 text-center mb-4">
              Our support team is here to help you get started with ToothLab AI
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://wa.me/your-number"
                className="text-[#25D366] hover:underline font-semibold text-sm"
              >
                WhatsApp Support
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="mailto:support@toothlab.ai"
                className="text-[#0073EA] hover:underline font-semibold text-sm"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
