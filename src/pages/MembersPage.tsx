import { useState, useEffect } from 'react';
import { Lock, LogOut } from 'lucide-react';

const MEMBERS_PASSWORD = 'toothlab2024'; // Change this to your desired password

export default function MembersPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const auth = sessionStorage.getItem('members_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password === MEMBERS_PASSWORD) {
      sessionStorage.setItem('members_auth', 'true');
      setIsAuthenticated(true);
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('members_auth');
    setIsAuthenticated(false);
    setPassword('');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
              Members Only
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Please enter the password to access this page
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter password"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Access Members Area
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Members-only content
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Members Area
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to the ToothLab Members Portal
          </h2>
          <p className="text-gray-600 mb-6">
            This is your exclusive members-only area. Here you can access special resources,
            documentation, and tools available only to ToothLab members.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="/training"
            className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-blue-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              VA Schedule & Role
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Comprehensive training materials for Virtual Assistants to master dental workflows and processes.
            </p>
            <span className="text-blue-600 font-medium text-sm">View Training →</span>
          </a>

          <a
            href="/scan-qc-training"
            className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-green-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Scan QC Training & SOP
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Complete training manual and standard operating procedures for scan quality control with detailed instructions and workflows.
            </p>
            <span className="text-blue-600 font-medium text-sm">View Training & SOP →</span>
          </a>

          <a
            href="/ugreen-nas-setup"
            className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-green-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              UGREEN NAS Setup Guide
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Complete onboarding guide for setting up UGREEN NAS access for external users with step-by-step instructions.
            </p>
            <span className="text-blue-600 font-medium text-sm">View Guide →</span>
          </a>

          <a
            href="/seazona-workticket"
            className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-orange-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Seazona Workticket Guide
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Detailed step-by-step instructions for creating and managing Seazona worktickets from QC approval to design completion.
            </p>
            <span className="text-blue-600 font-medium text-sm">View Guide →</span>
          </a>

          <a
            href="/folder-structure"
            className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-purple-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Folder Structure
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Complete guide for organizing and naming files when working with designers. Learn file naming conventions and folder structure.
            </p>
            <span className="text-blue-600 font-medium text-sm">View Guide →</span>
          </a>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Need Help?
          </h3>
          <p className="text-gray-600">
            If you have any questions or need assistance, please contact our member support team in WHATSAPP
          </p>
        </div>
      </div>
    </div>
  );
}
