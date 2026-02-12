import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function Footer() {
  const [emailHovered, setEmailHovered] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('support@toothlab.ai');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <footer className="bg-white text-gray-700 py-16 px-4 sm:px-6 lg:px-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10 mb-10">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <img src="/tiger_small.png" alt="ToothLab.Ai" className="h-8 w-8" />
              <h3 className="text-gray-900 text-2xl font-bold">ToothLab<span className="text-amber-500">.Ai</span></h3>
            </a>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Fast scan QC, expert CAD design, and<br />
              optional final restoration services for<br />
              modern dental practices.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#scan-qc" className="hover:text-amber-600 transition-colors">
                  Scan QC
                </a>
              </li>
              <li>
                <a href="#cad-design" className="hover:text-amber-600 transition-colors">
                  CAD Design
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-amber-600 transition-colors">
                  Crown & Bridge
                </a>
              </li>
              <li>
                <a href="#removables" className="hover:text-amber-600 transition-colors">
                  Removable
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/pricing" className="hover:text-amber-600 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-amber-600 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-amber-600 transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="/members" className="hover:text-amber-600 transition-colors">
                  Members Portal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Contact</h4>
            <div className="text-xs text-gray-600">
              <p
                className="relative inline-flex items-center gap-2 cursor-pointer hover:text-amber-600 transition-colors group"
                onMouseEnter={() => setEmailHovered(true)}
                onMouseLeave={() => setEmailHovered(false)}
                onClick={copyEmail}
              >
                support@toothlab.ai
                {emailHovered && !emailCopied && (
                  <Copy className="w-3 h-3 text-amber-600" />
                )}
                {emailCopied && (
                  <Check className="w-3 h-3 text-green-600" />
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-slate-50 rounded-lg p-4 border border-gray-200">
              <h5 className="text-gray-900 font-semibold text-sm mb-2">QC Turnaround</h5>
              <p className="text-xs text-gray-600">Fast feedback in ~15 minutes while patient is still in chair</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-gray-200">
              <h5 className="text-gray-900 font-semibold text-sm mb-2">CAD Design Options</h5>
              <p className="text-xs text-gray-600">Choose 1-hour, 6-hour, or 24-hour turnaround for your needs</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-gray-200">
              <h5 className="text-gray-900 font-semibold text-sm mb-2">Full Service Available</h5>
              <p className="text-xs text-gray-600">Complete manufacturing and delivery of final restorations</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} ToothLab.Ai. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
