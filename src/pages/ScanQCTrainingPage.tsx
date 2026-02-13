import { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, XCircle, AlertTriangle, FileCheck, Layers, Zap, Users, Monitor, MessageSquare, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function ScanQCTrainingPage() {
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

  const rejectionMessages = [
    {
      title: 'Bite Issue',
      message: 'Thank you for your submission. We can\'t proceed due to inaccurate bite scan. Please take a new bite so we can move forward with the case. Rejected cases must be resubmitted as a NEW case to be accepted into production.'
    },
    {
      title: 'Margins Unclear',
      message: 'Thank you for your submission. The margins are not defined in the scan. Please confirm the margins with Dr. or provide new scans so we can proceed with the case. Rejected cases must be resubmitted as a NEW case to be accepted into production.'
    },
    {
      title: 'Unclear Instructions',
      message: 'Thank you for your submission. We can\'t proceed due to unclear instructions. Please provide clarification so we can move forward. Rejected cases must be resubmitted as a NEW case to be accepted into production.'
    },
    {
      title: 'Incomplete Order Form',
      message: 'Thank you for your submission. Unfortunately, we are unable to proceed due to an incomplete order form. Please ensure all required fields are completed.'
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/members"
          className="inline-flex items-center gap-2 text-[#0073EA] hover:text-[#0063DA] font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Members Portal
        </Link>

        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-5 py-2 bg-gradient-to-r from-[#0073EA]/10 to-[#00CA72]/10 border-2 border-[#0073EA] rounded-full text-[#0073EA] text-sm font-bold mb-4">
              Training Manual & Standard Operating Procedure
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
              Scan QC Training & SOP
            </h1>
            <p className="text-sm text-gray-500 mb-6">Last Updated: Feb 2026 • Owner: ToothLab.Ai Operations</p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete instruction manual and standard operating procedure for Virtual Assistants performing scan quality control
            </p>
          </div>

          {/* Purpose Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0073EA] flex items-center justify-center">
                <Zap className="text-white" size={20} />
              </div>
              Purpose
            </h2>
            <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-100">
              <p className="text-gray-700 text-lg mb-4">
                This document defines how Scan QC is performed inside ToothLab.Ai to ensure incoming intraoral scans are usable before design or production. The goal is fast, consistent decisions with clear communication back to the clinic.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">The VA is trained to:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                  <span>Log into 3Shape Communicate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                  <span>Review incoming cases only</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                  <span>Perform initial Scan QC</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                  <span>Decide Accept vs Reject</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                  <span>Send the correct pre-written response to the dentist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                  <span>Escalate only when unsure</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-amber-50 border-2 border-amber-200 rounded-lg">
                <p className="font-bold text-gray-900">VA does NOT design, edit, or fix files. VA only reviews + communicates.</p>
              </div>
            </div>
          </section>

          {/* Scope Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#00CA72] flex items-center justify-center">
                <Layers className="text-white" size={20} />
              </div>
              Scope & Roles
            </h2>
            <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-100">
              <p className="text-gray-700 mb-4 font-semibold">Applies to all incoming cases through 3Shape Communicate.</p>

              <h3 className="font-bold text-gray-900 mb-3">Roles:</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                  <div className="flex items-start gap-3">
                    <Users className="text-[#00CA72] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-bold text-gray-900">VA Level 1</p>
                      <p className="text-sm text-gray-600">Initial scan review + checklist</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                  <div className="flex items-start gap-3">
                    <Shield className="text-[#FDAB3D] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-bold text-gray-900">Lead / Dave</p>
                      <p className="text-sm text-gray-600">Final decision, escalation, and edge cases</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tools Required */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FDAB3D] flex items-center justify-center">
                <Monitor className="text-white" size={20} />
              </div>
              Tools Required
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-orange-50 rounded-xl p-5 border-2 border-orange-200">
                <FileCheck className="text-[#FDAB3D] mb-2" size={24} />
                <p className="font-bold text-gray-900">3Shape Communicate Portal</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-5 border-2 border-orange-200">
                <CheckCircle className="text-[#FDAB3D] mb-2" size={24} />
                <p className="font-bold text-gray-900">Internal Scan QC Checklist</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-5 border-2 border-orange-200">
                <MessageSquare className="text-[#FDAB3D] mb-2" size={24} />
                <p className="font-bold text-gray-900">WhatsApp (internal + clinic)</p>
              </div>
            </div>
          </section>

          {/* Step-by-Step Workflow */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Workflow</h2>

            {/* Step 1 */}
            <div className="mb-6">
              <div className="bg-gradient-to-r from-[#0073EA] to-[#00CA72] text-white rounded-xl p-6 mb-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="bg-white text-[#0073EA] w-8 h-8 rounded-full flex items-center justify-center text-lg">1</span>
                  Login & Case Access
                </h3>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-100">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#0073EA] flex-shrink-0 mt-0.5" size={18} />
                    <span>Log in to 3Shape Communicate portal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-[#0073EA] flex-shrink-0 mt-0.5" size={18} />
                    <span>Open new incoming cases only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                    <span><strong>Do not</strong> modify or accept cases yet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                    <span>Review visually and compare against QC checklist</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-6">
              <div className="bg-gradient-to-r from-[#00CA72] to-[#0073EA] text-white rounded-xl p-6 mb-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="bg-white text-[#00CA72] w-8 h-8 rounded-full flex items-center justify-center text-lg">2</span>
                  Initial Visual Review (VA Level 1)
                </h3>
              </div>

              <div className="space-y-4">
                {/* A. Prep Quality */}
                <div className="bg-white rounded-xl p-5 border-2 border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">A. Prep Quality & Margins</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span><strong>Margins must be clearly visible and continuous</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span>No heavy artifacts on margins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span>Prep fully captured (no missing axial walls)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                      <span><strong>If margins are unclear → REJECT</strong></span>
                    </li>
                  </ul>
                </div>

                {/* B. Scan Completeness */}
                <div className="bg-white rounded-xl p-5 border-2 border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">B. Scan Completeness</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span>Entire arch captured</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span>Distal areas not cut off</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span>No major holes in scan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span>All required scans uploaded (upper, lower, bite)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                      <span><strong>If incomplete → REJECT</strong></span>
                    </li>
                  </ul>
                </div>

                {/* C. Bite Scan */}
                <div className="bg-white rounded-xl p-5 border-2 border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">C. Bite Scan</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span>Bite scan present and aligned</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span>Bite looks aligned (visual check)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                      <span><strong>Note:</strong> Bite accuracy is trusted unless clearly wrong</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                      <span><strong>If bite is inaccurate or missing → REJECT</strong></span>
                    </li>
                  </ul>
                </div>

                {/* D. Soft Tissue & Clarity */}
                <div className="bg-white rounded-xl p-5 border-2 border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">D. Soft Tissue & Clarity</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span>Check for excess saliva that affects scan quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span>Note any tissue movement issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span>Scan clarity must be acceptable for design</span>
                    </li>
                  </ul>
                </div>

                {/* E. Order Form */}
                <div className="bg-white rounded-xl p-5 border-2 border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">E. Order Form Completeness</h4>
                  <p className="text-sm text-gray-700 mb-2 font-semibold">Order form must include:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span>Doctor name</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span>Tooth numbers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span>Material</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span>Shade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span>Clear instructions and notes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                      <span><strong>Missing info → REJECT</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 - Decision Logic */}
            <div className="mb-6">
              <div className="bg-gradient-to-r from-[#FDAB3D] to-[#FF3D57] text-white rounded-xl p-6 mb-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="bg-white text-[#FDAB3D] w-8 h-8 rounded-full flex items-center justify-center text-lg">3</span>
                  Decision Logic
                </h3>
              </div>

              <div className="space-y-4">
                {/* GREEN - Pass */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#00CA72] flex items-center justify-center">
                      <CheckCircle className="text-white" size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">GREEN – Pass</h4>
                  </div>
                  <p className="text-gray-700 mb-3">All checklist items acceptable • Minor issues but workable</p>
                  <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                    <p className="font-semibold text-gray-900 mb-2">Criteria:</p>
                    <ul className="space-y-1 text-sm text-gray-700 mb-3">
                      <li>✓ Scans look clean</li>
                      <li>✓ Margins visible and continuous</li>
                      <li>✓ Bite present and usable</li>
                      <li>✓ Order form complete</li>
                    </ul>
                    <p className="font-semibold text-gray-900 mb-2">Action:</p>
                    <ul className="space-y-1 text-sm text-gray-700 mb-3">
                      <li>✓ Accept case in 3Shape</li>
                      <li>✓ Mark: <span className="italic">Order accepted for production</span></li>
                    </ul>
                    <p className="font-semibold text-gray-900 mb-1">Response used:</p>
                    <p className="text-sm text-gray-700 italic bg-green-50 p-2 rounded">
                      "Thank you for your submission. Scans look good, case will be accepted for production."
                    </p>
                  </div>
                </div>

                {/* YELLOW - Caution */}
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border-2 border-amber-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#FDAB3D] flex items-center justify-center">
                      <AlertTriangle className="text-white" size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">YELLOW – Caution</h4>
                  </div>
                  <p className="text-gray-700 mb-3">Bite questionable • Minor missing data • Risk but still workable</p>
                  <div className="bg-white rounded-lg p-4 border-2 border-amber-200">
                    <p className="font-semibold text-gray-900 mb-2">Action:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>⚠ Accept case with caution</li>
                      <li>⚠ Add internal note documenting the concern</li>
                      <li>⚠ Flag for Lead awareness</li>
                      <li>⚠ If unsure → Escalate to Lead / Dave</li>
                    </ul>
                  </div>
                </div>

                {/* RED - Fail */}
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border-2 border-red-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#FF3D57] flex items-center justify-center">
                      <XCircle className="text-white" size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">RED – Fail</h4>
                  </div>
                  <p className="text-gray-700 mb-3">Missing margins • Incomplete scan • Severe distortion or missing areas</p>
                  <div className="bg-white rounded-lg p-4 border-2 border-red-200">
                    <p className="font-semibold text-gray-900 mb-2">Common rejection reasons:</p>
                    <ul className="space-y-1 text-sm text-gray-700 mb-3">
                      <li>✗ Inaccurate or missing bite</li>
                      <li>✗ Margins not defined or unclear</li>
                      <li>✗ Unclear instructions</li>
                      <li>✗ Incomplete order form</li>
                      <li>✗ Missing scans or incomplete arches</li>
                      <li>✗ Files cannot be exported</li>
                    </ul>
                    <p className="font-semibold text-gray-900 mb-2">Action:</p>
                    <ul className="space-y-1 text-sm text-gray-700 mb-3">
                      <li>✗ Do NOT accept case</li>
                      <li>✗ Escalate to Lead / Dave</li>
                      <li>✗ Send appropriate rejection message to clinic</li>
                    </ul>
                    <div className="bg-red-100 rounded-lg p-3 border-2 border-red-300">
                      <p className="text-sm font-bold text-gray-900">
                        Critical: Rejected cases must be resubmitted as a NEW case
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 - Communication Protocol */}
            <div className="mb-6">
              <div className="bg-gradient-to-r from-[#FF3D57] to-[#FDAB3D] text-white rounded-xl p-6 mb-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="bg-white text-[#FF3D57] w-8 h-8 rounded-full flex items-center justify-center text-lg">4</span>
                  Communication Protocol
                </h3>
              </div>

              <div className="space-y-4">
                {/* Internal Communication */}
                <div className="bg-slate-50 rounded-xl p-5 border-2 border-slate-200">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Internal (VA → Lead)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Send case name and case ID</li>
                    <li>• State reason clearly in 1-2 lines</li>
                    <li>• Include screenshots if helpful</li>
                    <li>• Wait for Lead approval before contacting clinic</li>
                  </ul>
                </div>

                {/* Clinic Messaging */}
                <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Clinic Messaging (after Lead approval)</h4>
                  <p className="text-sm text-gray-600 mb-3">Use approved scripts only - see Standard Rejection Messages section below</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-[#00CA72] flex-shrink-0 mt-0.5" size={18} />
                      <span>Scan Passed → Use acceptance message</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                      <span>Scan Failed → Use appropriate rejection message</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                      <span>Additional Info Needed → Use clarification message</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Binary Rule Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="text-[#FDAB3D]" size={28} />
                <h3 className="text-xl font-bold">Critical Rule: Scan QC is Binary</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-center mt-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-2xl font-bold text-[#00CA72] mb-1">Clean</p>
                  <p className="text-lg">→ Accept</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-2xl font-bold text-[#FF3D57] mb-1">Any Issue</p>
                  <p className="text-lg">→ Reject</p>
                </div>
              </div>
              <p className="text-center mt-4 font-bold text-amber-300">No gray-zone approvals. Trust what is visible — do not assume missing data is probably fine.</p>
            </div>
          </section>

          {/* Standard Rejection Messages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Standard Rejection Messages</h2>
            <p className="text-gray-600 mb-6">These are approved scripts VA must copy and paste:</p>

            <div className="space-y-4">
              {rejectionMessages.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-5 border-2 border-gray-200 hover:border-[#0073EA] transition-colors">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                  <div className="bg-white rounded-lg p-4 border border-gray-300">
                    <p className="text-sm text-gray-700 font-mono leading-relaxed">
                      {item.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Rules & Guardrails */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Shield className="text-[#FDAB3D]" size={28} />
                Rules & Guardrails
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="text-[#FDAB3D] flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg">VA does <strong>NOT</strong> argue clinical judgment</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="text-[#FDAB3D] flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg">If unsure → escalate to Lead / Dave</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="text-[#FDAB3D] flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg">Never guess on margins</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="text-[#FDAB3D] flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg">Speed matters, <strong>accuracy matters more</strong></span>
                </li>
              </ul>
            </div>
          </section>

          {/* What VA is NOT Allowed to Do */}
          <section className="mb-12">
            <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What VA is NOT Allowed to Do</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <XCircle className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                  <span>Do not edit scans or design files</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                  <span>Do not guess missing info or assume it's fine</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                  <span>Do not accept "almost okay" cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                  <span>Do not design or adjust margins</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                  <span>Do not move files or modify case data</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="font-bold">If unsure about anything → escalate immediately</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Notes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Notes</h2>
            <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-100">
              <ul className="space-y-2 text-gray-700">
                <li>• Some portal wording is automatic for Lead - VA must manually type acceptance notes</li>
                <li>• Some cases are "bad examples" but must still be evaluated calmly and professionally</li>
                <li>• If files cannot be exported → VA escalates or asks dentist to call support</li>
                <li>• Product-specific notes exist (Zirconia, Duraflex, partials) but VA only checks that instructions are present, not clinical design decisions</li>
                <li>• Training images referenced in chat are part of checklist education</li>
                <li>• VA may see automated wording from Dave in system; VA must still manually paste responses</li>
              </ul>
            </div>
          </section>

          {/* Version Control */}
          <section>
            <div className="bg-gradient-to-r from-gray-100 to-slate-100 rounded-xl p-6 border-2 border-gray-300">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Version Control</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900">Version:</p>
                  <p>1.0</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Owner:</p>
                  <p>ToothLab.Ai Operations</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Last Updated:</p>
                  <p>Feb 2026</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
