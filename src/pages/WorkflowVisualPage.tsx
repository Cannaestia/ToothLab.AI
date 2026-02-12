import { ArrowDown, CheckCircle, Upload, Eye, Send, MessageSquare } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function WorkflowVisualPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12 print:mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 print:text-3xl">
              ToothLab.Ai Workflow
            </h1>
            <p className="text-xl text-gray-600 print:text-base">
              One-page visual guide • Print for quick reference
            </p>
            <button
              onClick={() => window.print()}
              className="mt-4 px-6 py-3 bg-[#FF3D57] text-white rounded-full font-semibold hover:bg-[#FF2D47] transition-all print:hidden"
            >
              Print This Page
            </button>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white border-4 border-gray-900 rounded-2xl p-8 print:border-2 print:p-6">

            <div className="grid md:grid-cols-2 gap-6 mb-8 print:gap-4 print:mb-6">
              <div className="bg-blue-500 text-white rounded-xl p-6 print:p-4">
                <h3 className="text-2xl font-bold mb-3 print:text-lg">Tier 1: Moderate QC</h3>
                <p className="text-sm mb-4 opacity-90 print:text-xs">"Clinically Acceptable Standard"</p>
                <ul className="space-y-2 text-sm print:text-xs">
                  <li>✓ High-volume GP offices</li>
                  <li>✓ In-house milling</li>
                  <li>✓ Experienced scanners</li>
                  <li className="font-bold mt-3">Flags critical failures only</li>
                  <li className="font-bold">Faster pass rate</li>
                </ul>
              </div>

              <div className="bg-red-500 text-white rounded-xl p-6 print:p-4">
                <h3 className="text-2xl font-bold mb-3 print:text-lg">Tier 2: Hard QC</h3>
                <p className="text-sm mb-4 opacity-90 print:text-xs">"High-Grade Precision Standard"</p>
                <ul className="space-y-2 text-sm print:text-xs">
                  <li>✓ Esthetic cases</li>
                  <li>✓ Implant restorations</li>
                  <li>✓ Full-arch/complex cases</li>
                  <li className="font-bold mt-3">Flags everything</li>
                  <li className="font-bold">Lower remake rate</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="space-y-6 print:space-y-4">

                <div className="bg-white border-4 border-[#FF3D57] rounded-xl p-6 shadow-lg print:border-2 print:p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#FF3D57] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl print:w-10 print:h-10 print:text-lg">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 print:text-lg">Dentist Uploads Scan</h3>
                      <p className="text-sm text-gray-600 print:text-xs">Via portal or cloud folder</p>
                    </div>
                    <Upload className="w-8 h-8 text-[#FF3D57] ml-auto print:w-6 print:h-6" />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700 print:text-xs print:p-2">
                    Select case type (crown, implant, etc.)
                  </div>
                </div>

                <div className="flex justify-center print:py-1">
                  <ArrowDown className="w-8 h-8 text-gray-400 print:w-6 print:h-6" />
                </div>

                <div className="bg-white border-4 border-[#0073EA] rounded-xl p-6 shadow-lg print:border-2 print:p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#0073EA] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl print:w-10 print:h-10 print:text-lg">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 print:text-lg">AI Pre-QC (Instant)</h3>
                      <p className="text-sm text-gray-600 print:text-xs">Automated checks</p>
                    </div>
                    <Eye className="w-8 h-8 text-[#0073EA] ml-auto print:w-6 print:h-6" />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700 print:text-xs print:p-2">
                    Checks completeness, scan type, obvious errors
                  </div>
                </div>

                <div className="flex justify-center print:py-1">
                  <ArrowDown className="w-8 h-8 text-gray-400 print:w-6 print:h-6" />
                </div>

                <div className="bg-white border-4 border-[#00CA72] rounded-xl p-6 shadow-lg print:border-2 print:p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#00CA72] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl print:w-10 print:h-10 print:text-lg">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 print:text-lg">VA QC Review (15–30 min)</h3>
                      <p className="text-sm text-gray-600 print:text-xs">Human verification</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-[#00CA72] ml-auto print:w-6 print:h-6" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 print:gap-2">
                    <div className="bg-gray-50 rounded-lg p-3 print:p-2">
                      <p className="font-semibold text-gray-900 text-sm mb-1 print:text-xs">VA Sees:</p>
                      <ul className="text-xs text-gray-700 space-y-0.5 print:text-[10px]">
                        <li>• Case details</li>
                        <li>• QC tier selected</li>
                        <li>• AI notes</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 print:p-2">
                      <p className="font-semibold text-gray-900 text-sm mb-1 print:text-xs">VA Actions:</p>
                      <ul className="text-xs text-gray-700 space-y-0.5 print:text-[10px]">
                        <li>• Confirm AI findings</li>
                        <li>• Apply QC rules</li>
                        <li>• Approve or reject</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center print:py-1">
                  <ArrowDown className="w-8 h-8 text-gray-400 print:w-6 print:h-6" />
                </div>

                <div className="bg-white border-4 border-[#FDAB3D] rounded-xl p-6 shadow-lg print:border-2 print:p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#FDAB3D] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl print:w-10 print:h-10 print:text-lg">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 print:text-lg">VA Sends Feedback</h3>
                      <p className="text-sm text-gray-600 print:text-xs">Via WhatsApp or email</p>
                    </div>
                    <Send className="w-8 h-8 text-[#FDAB3D] ml-auto print:w-6 print:h-6" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 print:gap-2">
                    <div className="bg-green-50 border-2 border-green-500 rounded-lg p-3 print:p-2">
                      <p className="font-bold text-green-800 mb-1 print:text-sm">✓ PASS</p>
                      <p className="text-xs text-gray-700 print:text-[10px]">Cleared for design</p>
                    </div>
                    <div className="bg-red-50 border-2 border-red-500 rounded-lg p-3 print:p-2">
                      <p className="font-bold text-red-800 mb-1 print:text-sm">✗ FAIL</p>
                      <p className="text-xs text-gray-700 print:text-[10px]">Rescan instructions sent</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center print:py-1">
                  <ArrowDown className="w-8 h-8 text-gray-400 print:w-6 print:h-6" />
                </div>

                <div className="bg-gradient-to-r from-[#FF3D57] to-[#0073EA] text-white rounded-xl p-6 print:p-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-white text-[#FF3D57] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl print:w-10 print:h-10 print:text-lg">5</div>
                    <div>
                      <h3 className="text-xl font-bold print:text-lg">Case Moves Forward</h3>
                      <p className="text-sm opacity-90 print:text-xs">To design queue or awaits rescan</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-6 print:mt-6 print:p-4 print:bg-gray-800">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 print:text-lg">
                <MessageSquare className="w-6 h-6 text-green-400 print:w-5 print:h-5" />
                WhatsApp Communication
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm print:text-xs print:gap-3">
                <div>
                  <p className="font-semibold mb-2">Auto Messages:</p>
                  <ul className="space-y-1 text-xs opacity-90 print:text-[10px]">
                    <li>• Trial signup welcome</li>
                    <li>• Scan received confirmation</li>
                    <li>• QC pass/fail notifications</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">VA Response Times:</p>
                  <ul className="space-y-1 text-xs opacity-90 print:text-[10px]">
                    <li>• Business hours: Real-time</li>
                    <li>• After hours: Auto-reply + queue</li>
                    <li>• Target: ~15 minutes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600 print:text-xs print:mt-4">
              <p className="font-semibold">ToothLab.Ai • VA Training Guide</p>
              <p className="text-xs opacity-75">This is infrastructure, not just support.</p>
            </div>

          </div>

        </div>
      </div>

      <Footer />

      <style>{`
        @media print {
          @page {
            margin: 0.5cm;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}
