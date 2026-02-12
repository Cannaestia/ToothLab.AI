import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';

export default function UgreenNasSetupPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = sessionStorage.getItem('members_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    } else {
      navigate('/members');
    }
    setIsLoading(false);
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ScrollToTop />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              UGREEN NAS Setup Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete onboarding guide for external users
            </p>
          </div>

          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-[#22C55E] to-[#10B981] text-white rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-2">Sign Up as an External User</h3>
                <p className="text-lg opacity-90">
                  Complete guide to setting up UGREEN NAS access for external users with step-by-step instructions.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
                <img src="/1.jpg" alt="UGREEN NAS Onboarding Guide Cover" className="w-full" />
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Installing the UGREEN NAS App for External Remote Access</h3>
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
                  <img src="/2.jpg" alt="Step 1: Installing UGREEN NAS App" className="w-full" />
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Manager Registration & User Access Setup</h3>
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
                  <img src="/3.jpg" alt="Step 2: Manager Registration and User Access Setup" className="w-full" />
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Accessing the UGREEN NAS via Desktop Application</h3>
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
                  <img src="/4.jpg" alt="Step 3: Accessing UGREEN NAS via Desktop Application" className="w-full" />
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-gray-700">
                  If you have any questions about the UGREEN NAS setup process, please contact your manager or the technical support team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
