import { useState, useEffect } from 'react';
import { FileText, AlertCircle, CheckSquare, Users, Clock, Eye, AlertTriangle, Zap, MessageSquare, Settings, Target, Database, Shield, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

export default function SeazonaWorkticketPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-[#0073EA] to-[#00CA72] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              COMPREHENSIVE SOP
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Seazona Workticket Creation Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Complete step-by-step instructions for creating and managing Seazona worktickets.<br />
              Follow this guide to ensure smooth case processing from QC approval to design completion.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/members"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0073EA] text-white rounded-full font-semibold hover:bg-[#0063CA] transition-all shadow-lg hover:scale-105"
              >
                <Eye className="w-5 h-5" />
                Back to Members Portal
              </Link>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
                <Clock className="w-4 h-4" />
                Est. Time: 5-10 min per ticket
              </div>
            </div>
          </div>

          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl shadow-lg p-8 border border-blue-800">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8" />
                Before You Start: Pre-Flight Checklist
              </h2>
              <p className="text-blue-100 mb-6">Before creating any workticket, verify you have all necessary information and access.</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h4 className="font-bold mb-3">Required Access & Tools:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Seazona login credentials
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Access to approved scan files
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Doctor's WhatsApp chat history
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Case tracking spreadsheet open
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <h4 className="font-bold mb-3">Required Information:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      Complete case details from doctor
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      Restoration type and tooth numbers
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      Material and shade specifications
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      QC approval notes and observations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#FF3D57] to-[#FDAB3D] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">1</span>
                Understanding Seazona Worktickets
              </h2>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">What is a Seazona Workticket?</h3>
                    <p className="text-gray-700 mb-3">
                      A Seazona workticket is a digital work order that tracks every case from scan approval through design completion and delivery.
                      It ensures proper communication between the VA team, designers, and the dental practice.
                    </p>
                    <p className="text-gray-700 text-sm">
                      Think of it as a digital passport for each case - it carries all the essential information, tracks its journey through the lab, and creates a permanent record for quality assurance and future reference.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-[#0073EA]" />
                    When to Create a Workticket
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">✓</div>
                      <div>
                        <p className="font-bold text-gray-900 mb-1">After Scan Passes QC</p>
                        <p className="text-gray-700 mb-2">Once you approve a scan and it's cleared for design, immediately create a workticket in Seazona to assign it to the design queue.</p>
                        <p className="text-sm text-gray-600 italic">Timing matters: Create the workticket within 5 minutes of QC approval to maintain workflow efficiency.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">✗</div>
                      <div>
                        <p className="font-bold text-gray-900 mb-1">DO NOT Create Worktickets For:</p>
                        <ul className="text-gray-700 text-sm space-y-1 mt-2">
                          <li>• Cases that failed QC (wait for rescan)</li>
                          <li>• Incomplete case information (get details first)</li>
                          <li>• Practice hasn't confirmed material/shade yet</li>
                          <li>• Missing scan files or corrupted uploads</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-[#FDAB3D]" />
                    Workticket Lifecycle Overview
                  </h3>
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex-1 min-w-[120px]">
                        <div className="bg-blue-500 text-white rounded-lg p-3 text-center">
                          <p className="font-bold text-sm">Created</p>
                          <p className="text-xs mt-1">VA submits</p>
                        </div>
                      </div>
                      <div className="text-gray-400 font-bold">→</div>
                      <div className="flex-1 min-w-[120px]">
                        <div className="bg-yellow-500 text-white rounded-lg p-3 text-center">
                          <p className="font-bold text-sm">Assigned</p>
                          <p className="text-xs mt-1">To designer</p>
                        </div>
                      </div>
                      <div className="text-gray-400 font-bold">→</div>
                      <div className="flex-1 min-w-[120px]">
                        <div className="bg-purple-500 text-white rounded-lg p-3 text-center">
                          <p className="font-bold text-sm">In Progress</p>
                          <p className="text-xs mt-1">Designing</p>
                        </div>
                      </div>
                      <div className="text-gray-400 font-bold">→</div>
                      <div className="flex-1 min-w-[120px]">
                        <div className="bg-orange-500 text-white rounded-lg p-3 text-center">
                          <p className="font-bold text-sm">Review</p>
                          <p className="text-xs mt-1">QC check</p>
                        </div>
                      </div>
                      <div className="text-gray-400 font-bold">→</div>
                      <div className="flex-1 min-w-[120px]">
                        <div className="bg-green-500 text-white rounded-lg p-3 text-center">
                          <p className="font-bold text-sm">Completed</p>
                          <p className="text-xs mt-1">Delivered</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#0073EA] to-[#00CA72] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">2</span>
                Step-by-Step: Creating a Seazona Workticket
              </h2>

              <div className="space-y-4">
                <div className="bg-white border-2 border-[#0073EA] rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0073EA] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-3">Login to Seazona System</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Navigate to <span className="font-mono bg-gray-100 px-2 py-1 rounded">seazona.io</span> or your lab's custom Seazona portal</li>
                        <li>• Use your VA credentials provided during onboarding</li>
                        <li>• Ensure you're in the correct workspace (ToothLab.Ai)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#00CA72] rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00CA72] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-3">Click "Create New Workticket"</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Look for the "+ New Ticket" or "Create Workticket" button (usually in top right corner)</li>
                        <li>• Select workticket type: <span className="font-semibold">"Design Case"</span></li>
                        <li>• Choose priority level based on case urgency (Standard/Rush/Emergency)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#FDAB3D] rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FDAB3D] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-3">Fill in Patient & Practice Information</h4>
                      <div className="space-y-3">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <p className="font-semibold text-gray-900 mb-3">Required Fields with Examples:</p>
                          <div className="space-y-3 text-sm">
                            <div className="bg-white rounded p-3">
                              <p className="font-semibold text-gray-900">Practice Name:</p>
                              <p className="text-gray-600 mb-1">Full dental office name exactly as registered</p>
                              <p className="font-mono text-xs text-green-700 bg-green-50 p-2 rounded">Example: "Smile Dental Care" or "Dr. Johnson's Family Dentistry"</p>
                            </div>
                            <div className="bg-white rounded p-3">
                              <p className="font-semibold text-gray-900">Doctor Name:</p>
                              <p className="text-gray-600 mb-1">Include title and full name</p>
                              <p className="font-mono text-xs text-green-700 bg-green-50 p-2 rounded">Example: "Dr. Sarah Johnson" or "Dr. Michael Chen, DDS"</p>
                            </div>
                            <div className="bg-white rounded p-3">
                              <p className="font-semibold text-gray-900">Patient Name:</p>
                              <p className="text-gray-600 mb-1">First and Last name (use initials if PHI restrictions apply)</p>
                              <p className="font-mono text-xs text-green-700 bg-green-50 p-2 rounded">Example: "John Smith" or "J.S." (for PHI compliance)</p>
                            </div>
                            <div className="bg-white rounded p-3">
                              <p className="font-semibold text-gray-900">Patient ID / Case Number:</p>
                              <p className="text-gray-600 mb-1">Use the practice's reference number OR create ToothLab case ID</p>
                              <p className="font-mono text-xs text-green-700 bg-green-50 p-2 rounded">Example: "PT-2024-0156" or "Case #4521"</p>
                            </div>
                            <div className="bg-white rounded p-3">
                              <p className="font-semibold text-gray-900">Contact Information:</p>
                              <p className="text-gray-600 mb-1">Preferred contact method (email or phone)</p>
                              <p className="font-mono text-xs text-green-700 bg-green-50 p-2 rounded">Example: "office@smiledentalcare.com" or "WhatsApp: +1-555-0123"</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3">
                          <p className="text-xs text-yellow-900">
                            <span className="font-bold">HIPAA Note:</span> If the practice has PHI restrictions, use patient initials or case numbers instead of full names. Check with your supervisor if unsure.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#FF3D57] rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF3D57] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-3">Enter Case Details (Critical Section)</h4>
                      <div className="space-y-4">

                        <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                          <p className="font-semibold text-gray-900 mb-3 text-base">Case Specifications - Field by Field:</p>

                          <div className="space-y-4">
                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                              <p className="font-semibold text-gray-900 mb-1">Restoration Type:</p>
                              <p className="text-xs text-gray-600 mb-2">Select the exact restoration category</p>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-gray-50 p-2 rounded">
                                  <p className="font-semibold">Single Units:</p>
                                  <p className="text-gray-600">Crown, Implant Crown, Veneer, Inlay/Onlay</p>
                                </div>
                                <div className="bg-gray-50 p-2 rounded">
                                  <p className="font-semibold">Multiple Units:</p>
                                  <p className="text-gray-600">Bridge (3-unit, 4-unit, etc.), Implant Bridge</p>
                                </div>
                                <div className="bg-gray-50 p-2 rounded">
                                  <p className="font-semibold">Removable:</p>
                                  <p className="text-gray-600">Partial Denture, Full Denture, Flexible Partial</p>
                                </div>
                                <div className="bg-gray-50 p-2 rounded">
                                  <p className="font-semibold">Full Arch:</p>
                                  <p className="text-gray-600">All-on-X, Hybrid Denture, Screw-Retained</p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                              <p className="font-semibold text-gray-900 mb-1">Tooth Numbers:</p>
                              <p className="text-xs text-gray-600 mb-2">CRITICAL: Verify numbering system (Universal vs FDI vs Palmer)</p>
                              <div className="space-y-2">
                                <div className="bg-blue-50 p-2 rounded text-xs">
                                  <p className="font-semibold text-blue-900">Universal System (Most Common in US):</p>
                                  <p className="text-blue-800">Permanent: #1-32 | Example: Upper right first molar = #3</p>
                                </div>
                                <div className="bg-green-50 p-2 rounded text-xs">
                                  <p className="font-semibold text-green-900">FDI System (International):</p>
                                  <p className="text-green-800">Two digits: Quadrant + Tooth | Example: 16 = Upper right first molar</p>
                                </div>
                                <div className="bg-orange-50 p-2 rounded text-xs">
                                  <p className="font-semibold text-orange-900">How to Enter:</p>
                                  <p className="text-orange-800">Single: "#14" | Multiple: "#13, #14, #15" | Bridge: "#12-15"</p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                              <p className="font-semibold text-gray-900 mb-1">Material Selection:</p>
                              <p className="text-xs text-gray-600 mb-2">Choose based on case requirements and doctor preference</p>
                              <div className="space-y-1 text-xs">
                                <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                                  <span className="font-semibold">Zirconia (Full Contour)</span>
                                  <span className="text-gray-600">High strength, posterior crowns</span>
                                </div>
                                <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                                  <span className="font-semibold">Zirconia (Layered)</span>
                                  <span className="text-gray-600">Esthetic anterior cases</span>
                                </div>
                                <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                                  <span className="font-semibold">E-max (Lithium Disilicate)</span>
                                  <span className="text-gray-600">High esthetics, veneers</span>
                                </div>
                                <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                                  <span className="font-semibold">PMMA (Temporary)</span>
                                  <span className="text-gray-600">Provisionals, try-ins</span>
                                </div>
                                <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                                  <span className="font-semibold">PFM (Porcelain Fused to Metal)</span>
                                  <span className="text-gray-600">Traditional, less common now</span>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                              <p className="font-semibold text-gray-900 mb-1">Shade Information:</p>
                              <p className="text-xs text-gray-600 mb-2">Record exact shade tab and any special color notes</p>
                              <div className="space-y-2">
                                <div className="bg-purple-50 p-2 rounded text-xs">
                                  <p className="font-semibold text-purple-900">Vita Classical Shades:</p>
                                  <p className="text-purple-800">A1, A2, A3, A3.5, A4 | B1, B2, B3, B4 | C1-C4 | D2-D4</p>
                                </div>
                                <div className="bg-purple-50 p-2 rounded text-xs">
                                  <p className="font-semibold text-purple-900">Additional Notes to Include:</p>
                                  <p className="text-purple-800">• Stump shade (if different) | • Characterization needs | • Reference to adjacent teeth | • Photo-matched shade</p>
                                </div>
                                <div className="bg-red-50 p-2 rounded text-xs">
                                  <p className="font-semibold text-red-900">Example Entry:</p>
                                  <p className="font-mono text-red-800">"A2 body, match adjacent #13, slightly lighter incisal edge"</p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                              <p className="font-semibold text-gray-900 mb-1">Special Instructions:</p>
                              <p className="text-xs text-gray-600 mb-2">Clear, specific design guidance from the doctor</p>
                              <div className="space-y-2 text-xs">
                                <div className="bg-green-50 p-2 rounded">
                                  <p className="font-semibold text-green-900">Good Examples:</p>
                                  <p className="text-green-800">✓ "Increase contact points for better food deflection"</p>
                                  <p className="text-green-800">✓ "Match anatomy to #19, patient prefers square-shaped"</p>
                                  <p className="text-green-800">✓ "Reduce occlusal height by 0.5mm, patient is heavy grinder"</p>
                                </div>
                                <div className="bg-red-50 p-2 rounded">
                                  <p className="font-semibold text-red-900">Avoid Vague Instructions:</p>
                                  <p className="text-red-800">✗ "Make it look good"</p>
                                  <p className="text-red-800">✗ "Normal crown"</p>
                                  <p className="text-red-800">✗ "Do what you think is best"</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                          <p className="font-semibold text-gray-900 mb-3 text-base">QC Information to Include:</p>
                          <div className="space-y-3 text-sm">
                            <div className="bg-white rounded p-3">
                              <p className="font-semibold text-gray-900 mb-1">QC Level Applied:</p>
                              <p className="text-gray-700">Specify which QC standard was used: Moderate QC or Hard QC</p>
                              <p className="text-xs text-gray-600 mt-1 italic">This helps the designer understand the scan quality expectations</p>
                            </div>
                            <div className="bg-white rounded p-3">
                              <p className="font-semibold text-gray-900 mb-1">Scan Quality Notes:</p>
                              <p className="text-gray-700">Document any observations that might affect design:</p>
                              <ul className="text-xs text-gray-600 mt-2 space-y-1">
                                <li>• Margin clarity status (excellent/good/acceptable)</li>
                                <li>• Any areas that were borderline but approved</li>
                                <li>• Specific regions designer should pay attention to</li>
                                <li>• Bite registration quality notes</li>
                              </ul>
                            </div>
                            <div className="bg-white rounded p-3">
                              <p className="font-semibold text-gray-900 mb-1">Example QC Note:</p>
                              <p className="font-mono text-xs bg-gray-100 p-2 rounded text-gray-800">
                                "Passed Moderate QC. Margins clear on mesial/distal. Slight shadow on lingual margin but within tolerance. Bite scan shows adequate intercuspation. Ready for design."
                              </p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#9333EA] rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#9333EA] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">5</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-3">Attach Scan Files & Documentation</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <span className="font-semibold">Upload Scan Files:</span> Attach the approved scan files (.stl, .ply, or scanner-specific formats)</li>
                        <li>• <span className="font-semibold">Reference Photos:</span> Any shade photos, bite registration images, or reference images</li>
                        <li>• <span className="font-semibold">Prescription Form:</span> If the doctor submitted a written prescription or case sheet</li>
                        <li>• <span className="font-semibold">QC Screenshots:</span> If applicable, screenshots showing areas of focus</li>
                      </ul>
                      <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded">
                        <p className="text-sm text-red-800"><span className="font-bold">Important:</span> Verify all files uploaded successfully before proceeding. Corrupted or missing files will delay the design process.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#06B6D4] rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#06B6D4] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">6</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-3">Assign to Designer</h4>
                      <div className="space-y-3">
                        <p className="text-gray-700">Select the appropriate designer based on:</p>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <span className="font-semibold">Case Complexity:</span> Match case difficulty to designer skill level</li>
                          <li>• <span className="font-semibold">Workload:</span> Check designer availability and current queue</li>
                          <li>• <span className="font-semibold">Specialization:</span> Some designers specialize in implants, full-arch, etc.</li>
                          <li>• <span className="font-semibold">Timeline:</span> Consider turnaround time requirements</li>
                        </ul>
                        <div className="bg-blue-50 rounded-lg p-3 mt-3">
                          <p className="text-sm text-gray-700"><span className="font-semibold">Pro Tip:</span> If unsure which designer to assign, mark as "Unassigned" and add a note for the design manager to assign appropriately.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#10B981] rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#10B981] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">7</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-3">Set Deadline & Priority</h4>
                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="font-semibold text-gray-900 mb-2">Turnaround Time Guidelines:</p>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• <span className="font-semibold text-green-700">Standard Cases:</span> 3-5 business days</li>
                            <li>• <span className="font-semibold text-yellow-700">Rush Cases:</span> 24-48 hours (add rush fee note)</li>
                            <li>• <span className="font-semibold text-red-700">Emergency:</span> Same day (requires manager approval)</li>
                          </ul>
                        </div>
                        <p className="text-gray-700 text-sm">Input the due date in Seazona and mark the priority level. The system will notify the designer of urgent cases.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#EF4444] rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#EF4444] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">8</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-3">Add Internal Notes & Communication</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <span className="font-semibold">Designer Notes:</span> Anything the designer needs to know (e.g., "Doctor prefers slightly smaller contact points")</li>
                        <li>• <span className="font-semibold">Practice Preferences:</span> If this doctor has specific preferences from previous cases</li>
                        <li>• <span className="font-semibold">Communication History:</span> Summary of any WhatsApp discussions about the case</li>
                        <li>• <span className="font-semibold">Special Requests:</span> Any unique requirements or considerations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white text-green-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">9</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-lg mb-3">Review & Submit Workticket</h4>
                      <div className="space-y-2">
                        <p className="text-green-50 font-semibold">Before clicking "Create" or "Submit", verify:</p>
                        <ul className="space-y-1 text-green-50 text-sm">
                          <li>✓ All required fields are completed</li>
                          <li>✓ Files are attached and verified</li>
                          <li>✓ Designer is assigned (or marked for manager assignment)</li>
                          <li>✓ Due date is set correctly</li>
                          <li>✓ Priority level is appropriate</li>
                          <li>✓ All notes and instructions are clear</li>
                        </ul>
                        <div className="mt-3 p-3 bg-green-700 rounded">
                          <p className="text-sm font-semibold">Click "Create Workticket" or "Submit" to finalize. The designer will be automatically notified.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#FDAB3D] to-[#FF3D57] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">3</span>
                After Creating the Workticket
              </h2>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                    <p className="text-gray-700"><span className="font-semibold">Copy the Workticket Number:</span> Note the ticket ID/number (e.g., TL-1234) for your records</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                    <p className="text-gray-700"><span className="font-semibold">Update Your Tracking Sheet:</span> Log the workticket number in your daily tracking spreadsheet</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                    <p className="text-gray-700"><span className="font-semibold">Monitor Progress:</span> Check workticket status periodically to ensure it's moving through the design queue</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</div>
                    <p className="text-gray-700"><span className="font-semibold">Respond to Designer Questions:</span> If the designer adds comments or questions to the ticket, respond promptly</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">4</span>
                Common Mistakes to Avoid
              </h2>

              <div className="space-y-3">
                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                  <p className="font-semibold text-red-900 mb-1">Missing Files</p>
                  <p className="text-sm text-red-800">Always verify scan files uploaded completely. Missing or corrupted files cause delays.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                  <p className="font-semibold text-red-900 mb-1">Incorrect Tooth Numbers</p>
                  <p className="text-sm text-red-800">Double-check tooth numbering system (Universal vs. FDI) and verify with the original prescription.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                  <p className="font-semibold text-red-900 mb-1">Vague Special Instructions</p>
                  <p className="text-sm text-red-800">Be specific with design notes. "Make it look good" isn't helpful. Instead: "Contact points should be slightly smaller than natural tooth proportions."</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                  <p className="font-semibold text-red-900 mb-1">Wrong Priority Level</p>
                  <p className="text-sm text-red-800">Don't mark everything as urgent. This creates confusion and slows down truly urgent cases.</p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                  <p className="font-semibold text-red-900 mb-1">Forgetting QC Notes</p>
                  <p className="text-sm text-red-800">Always include your QC observations. If you noticed anything during QC that the designer should know, document it.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Users className="w-8 h-8 text-[#0073EA]" />
                Quick Reference: Workticket Fields Checklist
              </h2>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-bold text-gray-900 mb-3">Practice & Patient Info:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>☐ Practice Name</li>
                      <li>☐ Doctor Name</li>
                      <li>☐ Patient Name</li>
                      <li>☐ Patient ID / Case Number</li>
                      <li>☐ Contact Information</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-3">Case Specifications:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>☐ Restoration Type</li>
                      <li>☐ Tooth Numbers</li>
                      <li>☐ Material Selection</li>
                      <li>☐ Shade Information</li>
                      <li>☐ Special Instructions</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-3">QC & Timeline:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>☐ Due Date</li>
                      <li>☐ Priority Level</li>
                      <li>☐ QC Notes</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-3">Files & Assignment:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>☐ Scan Files Attached</li>
                      <li>☐ Reference Photos (if any)</li>
                      <li>☐ Prescription Form (if any)</li>
                      <li>☐ Designer Assigned</li>
                      <li>☐ Internal Notes Added</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#9333EA] to-[#EC4899] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">5</span>
                Case Type Decision Tree
              </h2>

              <p className="text-gray-600 mb-6">Use this guide to determine the correct restoration type and requirements based on case details.</p>

              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
                  <p className="font-bold text-blue-900 mb-2">Is it a Single Tooth?</p>
                  <div className="ml-4 space-y-2 text-sm">
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-gray-900">On Natural Tooth → <span className="text-blue-600">Crown</span></p>
                      <p className="text-xs text-gray-600">Workticket Type: Single Crown | Material: Usually Zirconia or E-max | Notes: Document prep margins</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-gray-900">On Implant → <span className="text-blue-600">Implant Crown</span></p>
                      <p className="text-xs text-gray-600">Workticket Type: Implant Restoration | Material: Zirconia on Ti-base | Notes: Document implant platform type (e.g., "Nobel Active RP 4.3mm")</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-gray-900">Esthetic Veneer → <span className="text-blue-600">Veneer</span></p>
                      <p className="text-xs text-gray-600">Workticket Type: Veneer | Material: E-max preferred | Notes: Minimal prep or no-prep, shade matching critical</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
                  <p className="font-bold text-green-900 mb-2">Multiple Adjacent Teeth?</p>
                  <div className="ml-4 space-y-2 text-sm">
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-gray-900">Connected Units → <span className="text-green-600">Bridge</span></p>
                      <p className="text-xs text-gray-600">Workticket Type: Bridge (specify unit count, e.g., "3-unit bridge") | Material: Zirconia for strength | Notes: Document abutments and pontics (e.g., "#13, 14 pontic, #15")</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-gray-900">Separate Crowns → <span className="text-green-600">Multiple Single Crowns</span></p>
                      <p className="text-xs text-gray-600">Create individual worktickets OR batch workticket depending on lab protocol | Notes: If splinted for occlusal stability, note in instructions</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4">
                  <p className="font-bold text-purple-900 mb-2">Full Arch Case?</p>
                  <div className="ml-4 space-y-2 text-sm">
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-gray-900">Implant-Supported → <span className="text-purple-600">All-on-X / Hybrid</span></p>
                      <p className="text-xs text-gray-600">Workticket Type: Full Arch Restoration | Material: Zirconia or PMMA (if provisional) | Notes: Document number of implants, implant positions, screw vs cement retention</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-gray-900">Removable → <span className="text-purple-600">Complete/Partial Denture</span></p>
                      <p className="text-xs text-gray-600">Workticket Type: Denture | Material: PMMA, Flexible, or Acrylic | Notes: Document retention method, clasps, esthetics requirements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#F59E0B] to-[#EF4444] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">6</span>
                Workticket Status Monitoring & Management
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">After Submission: What to Monitor</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <p className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        First 30 Minutes
                      </p>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>✓ Verify designer received notification</li>
                        <li>✓ Check all files opened successfully</li>
                        <li>✓ Confirm workticket shows "Assigned" status</li>
                        <li>✓ Designer hasn't flagged any issues</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <p className="font-bold text-green-900 mb-2 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5" />
                        Throughout Design Phase
                      </p>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>✓ Check for designer questions (2x daily)</li>
                        <li>✓ Monitor status updates in Seazona</li>
                        <li>✓ Respond to comments within 1 hour</li>
                        <li>✓ Alert practice of any delays immediately</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                      <p className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        If Status Shows "On Hold"
                      </p>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• Check designer comments immediately</li>
                        <li>• Common reasons: missing info, file issues</li>
                        <li>• Contact practice for clarification if needed</li>
                        <li>• Update workticket and notify designer</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <p className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                        <CheckSquare className="w-5 h-5" />
                        When Status Shows "Complete"
                      </p>
                      <ul className="text-sm text-purple-800 space-y-1">
                        <li>✓ Download design files</li>
                        <li>✓ Quick visual QC of design</li>
                        <li>✓ Send to practice via agreed method</li>
                        <li>✓ Update tracking sheet</li>
                        <li>✓ Archive workticket number</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg p-4">
                  <p className="font-bold text-red-900 mb-2">Critical SLA (Service Level Agreement) Guidelines:</p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm mt-3">
                    <div className="bg-white rounded p-3">
                      <p className="font-bold text-gray-900">Standard Cases</p>
                      <p className="text-gray-600">Target: 3-5 business days</p>
                      <p className="text-xs text-gray-500 mt-1">Check status: Every 24 hours</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="font-bold text-gray-900">Rush Cases</p>
                      <p className="text-gray-600">Target: 24-48 hours</p>
                      <p className="text-xs text-gray-500 mt-1">Check status: Every 4 hours</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="font-bold text-gray-900">Emergency</p>
                      <p className="text-gray-600">Target: Same day</p>
                      <p className="text-xs text-gray-500 mt-1">Check status: Hourly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#EF4444] to-[#DC2626] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">7</span>
                Troubleshooting Common Issues
              </h2>

              <div className="space-y-4">
                <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
                  <p className="font-bold text-red-900 mb-2 text-lg">Problem: Files Won't Upload</p>
                  <div className="bg-white rounded p-3 text-sm space-y-2">
                    <p className="font-semibold text-gray-900">Possible Causes & Solutions:</p>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• <span className="font-semibold">File too large:</span> Compress or split files, max 500MB per file</li>
                      <li>• <span className="font-semibold">Wrong format:</span> Convert to .stl, .ply, or .dcm format</li>
                      <li>• <span className="font-semibold">Network timeout:</span> Try wired connection or upload during off-peak hours</li>
                      <li>• <span className="font-semibold">Browser issue:</span> Clear cache or try Chrome/Firefox</li>
                    </ul>
                    <div className="bg-blue-50 p-2 rounded mt-2">
                      <p className="text-xs text-blue-900"><span className="font-bold">Escalation:</span> If still failing after 3 attempts, contact IT support and create workticket without files, noting "Files to follow - upload issue"</p>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-orange-200 rounded-lg p-4 bg-orange-50">
                  <p className="font-bold text-orange-900 mb-2 text-lg">Problem: Doctor Didn't Specify Material or Shade</p>
                  <div className="bg-white rounded p-3 text-sm space-y-2">
                    <p className="font-semibold text-gray-900">Step-by-Step Resolution:</p>
                    <ol className="text-gray-700 space-y-2 ml-4 list-decimal">
                      <li><span className="font-semibold">DO NOT guess</span> - incorrect material = remake = lost time/money</li>
                      <li><span className="font-semibold">Send WhatsApp message:</span> "Hi Dr. [Name], to proceed with your case for tooth #[X], could you confirm: 1) Material preference (Zirconia/E-max/other) 2) Shade selection. Thank you!"</li>
                      <li><span className="font-semibold">If urgent:</span> Call practice directly</li>
                      <li><span className="font-semibold">Create workticket with status "On Hold"</span> and note "Awaiting material/shade confirmation from practice"</li>
                      <li><span className="font-semibold">Set reminder</span> to follow up in 2 hours if no response</li>
                    </ol>
                  </div>
                </div>

                <div className="border-2 border-yellow-200 rounded-lg p-4 bg-yellow-50">
                  <p className="font-bold text-yellow-900 mb-2 text-lg">Problem: Can't Determine Which Designer to Assign</p>
                  <div className="bg-white rounded p-3 text-sm space-y-2">
                    <p className="font-semibold text-gray-900">Designer Assignment Guidelines:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="font-semibold text-gray-900">Simple Cases:</p>
                        <p className="text-xs text-gray-600">Single posterior crowns, standard anatomy</p>
                        <p className="text-xs text-blue-700 mt-1">→ Any available designer</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="font-semibold text-gray-900">Complex Esthetics:</p>
                        <p className="text-xs text-gray-600">Anterior veneers, smile design</p>
                        <p className="text-xs text-blue-700 mt-1">→ Senior designer or esthetic specialist</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="font-semibold text-gray-900">Implant Cases:</p>
                        <p className="text-xs text-gray-600">Implant crowns, abutments</p>
                        <p className="text-xs text-blue-700 mt-1">→ Designer certified for implants</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="font-semibold text-gray-900">Full Arch:</p>
                        <p className="text-xs text-gray-600">All-on-X, hybrids</p>
                        <p className="text-xs text-blue-700 mt-1">→ Escalate to Design Manager</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-2 rounded mt-2">
                      <p className="text-xs text-blue-900"><span className="font-bold">When Unsure:</span> Leave "Unassigned" and add note "@DesignManager - Please assign appropriate designer for [case type]"</p>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-purple-200 rounded-lg p-4 bg-purple-50">
                  <p className="font-bold text-purple-900 mb-2 text-lg">Problem: Designer Says Scan Quality Insufficient</p>
                  <div className="bg-white rounded p-3 text-sm space-y-2">
                    <p className="font-semibold text-gray-900">Critical Decision Point:</p>
                    <div className="bg-red-50 border border-red-300 rounded p-3 mb-2">
                      <p className="text-xs text-red-900 font-semibold">This should RARELY happen if QC was done correctly!</p>
                    </div>
                    <p className="text-gray-700 mb-2">Immediate Actions:</p>
                    <ol className="text-gray-700 space-y-2 ml-4 list-decimal text-xs">
                      <li>Review designer's specific concerns in workticket comments</li>
                      <li>Re-examine scan files yourself with designer's notes in mind</li>
                      <li>If designer is correct: Contact practice for rescan, update workticket to "On Hold - Rescan Required"</li>
                      <li>If scan is acceptable: Escalate to QC Manager to review and mediate</li>
                      <li>Document the outcome for training purposes</li>
                    </ol>
                  </div>
                </div>

                <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50">
                  <p className="font-bold text-green-900 mb-2 text-lg">Problem: Doctor Wants Changes After Design Started</p>
                  <div className="bg-white rounded p-3 text-sm space-y-2">
                    <p className="font-semibold text-gray-900">Change Request Protocol:</p>
                    <ol className="text-gray-700 space-y-2 ml-4 list-decimal text-xs">
                      <li><span className="font-semibold">Document the change:</span> Get clear written description via WhatsApp or email</li>
                      <li><span className="font-semibold">Add comment to workticket:</span> "@Designer - Change request from practice: [specific details]"</li>
                      <li><span className="font-semibold">Assess impact:</span> Will this delay delivery? Major redesign needed?</li>
                      <li><span className="font-semibold">Communicate timeline:</span> "Dr. [Name], we've updated the designer. This may add 1-2 days to delivery. Current ETA: [date]"</li>
                      <li><span className="font-semibold">Track revision:</span> Note in tracking sheet for metrics</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#06B6D4] to-[#0891B2] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">8</span>
                Communication & Documentation Standards
              </h2>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-900 text-lg mb-3 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Internal Communication (With Designers)
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-gray-900 mb-1">Always Use Workticket Comments For:</p>
                      <ul className="text-gray-700 space-y-1 ml-4">
                        <li>• Design instructions and clarifications</li>
                        <li>• Change requests from doctors</li>
                        <li>• Questions about case specifics</li>
                        <li>• Timeline updates or rush requests</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-gray-900 mb-1">Communication Best Practices:</p>
                      <ul className="text-gray-700 space-y-1 ml-4 text-xs">
                        <li>✓ Use @mentions to notify specific people: "@DesignerName" or "@DesignManager"</li>
                        <li>✓ Be specific and clear: Avoid "please fix" - instead "Please increase contact point tightness on mesial surface"</li>
                        <li>✓ Include context: Reference tooth numbers and specific areas</li>
                        <li>✓ Respond within 1 hour during business hours</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="font-bold text-green-900 text-lg mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    External Communication (With Practices)
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-gray-900 mb-2">WhatsApp Response Scripts:</p>
                      <div className="space-y-2 text-xs">
                        <div className="bg-gray-50 p-2 rounded">
                          <p className="font-semibold text-gray-700">When Creating Workticket:</p>
                          <p className="font-mono text-gray-600">"Hi Dr. [Name], your scan for tooth #[X] has passed QC and is now with our design team. Case #[ID]. Expected completion: [Date]. We'll update you when it's ready!"</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded">
                          <p className="font-semibold text-gray-700">When Design is Complete:</p>
                          <p className="font-mono text-gray-600">"Great news! Your case for tooth #[X] is complete. Design files are being sent now. Please review and let us know if any adjustments needed. Case #[ID]"</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded">
                          <p className="font-semibold text-gray-700">If Delay Occurs:</p>
                          <p className="font-mono text-gray-600">"Hi Dr. [Name], quick update on case #[ID] - [brief reason for delay]. New estimated completion: [Date]. We're prioritizing this. Please let me know if you have any concerns."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <h3 className="font-bold text-yellow-900 text-lg mb-3 flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Documentation & Record Keeping
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-gray-900 mb-2">Required Documentation Trail:</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div>
                          <p className="font-semibold text-gray-700 text-xs mb-1">In Seazona Workticket:</p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            <li>• All case specifications</li>
                            <li>• QC approval notes</li>
                            <li>• Design instructions</li>
                            <li>• All communications with designer</li>
                            <li>• Change requests and revisions</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-700 text-xs mb-1">In Tracking Spreadsheet:</p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Workticket number</li>
                            <li>• Date created</li>
                            <li>• Practice name and case ID</li>
                            <li>• Expected completion date</li>
                            <li>• Status updates</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded p-3">
                      <p className="text-xs text-red-900">
                        <span className="font-bold">CRITICAL:</span> Never delete workticket comments or documentation. These create a permanent record for quality assurance, dispute resolution, and training purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">9</span>
                Quality Assurance Final Checklist
              </h2>

              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-500">
                <p className="font-bold text-green-900 text-lg mb-4">Before Clicking "Submit" - Verify Every Item:</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-600" />
                      Critical Information
                    </p>
                    <div className="space-y-2 text-sm">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" disabled />
                        <span className="text-gray-700">Practice name spelled correctly</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" disabled />
                        <span className="text-gray-700">Doctor name with proper title</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" disabled />
                        <span className="text-gray-700">Patient ID / Case number recorded</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" disabled />
                        <span className="text-gray-700">Tooth numbers verified (correct system)</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" disabled />
                        <span className="text-gray-700">Restoration type matches case</span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <p className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-purple-600" />
                      Files & Specifications
                    </p>
                    <div className="space-y-2 text-sm">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" disabled />
                        <span className="text-gray-700">All scan files attached and verified</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" disabled />
                        <span className="text-gray-700">Material specified correctly</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" disabled />
                        <span className="text-gray-700">Shade documented with system (e.g., Vita)</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" disabled />
                        <span className="text-gray-700">Special instructions clear and specific</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" disabled />
                        <span className="text-gray-700">QC notes included</span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <p className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-orange-600" />
                      Timeline & Priority
                    </p>
                    <div className="space-y-2 text-sm">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" disabled />
                        <span className="text-gray-700">Due date set correctly</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" disabled />
                        <span className="text-gray-700">Priority level appropriate (not over-escalated)</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" disabled />
                        <span className="text-gray-700">Rush fee noted if applicable</span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <p className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-green-600" />
                      Assignment & Communication
                    </p>
                    <div className="space-y-2 text-sm">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" disabled />
                        <span className="text-gray-700">Designer assigned OR marked for manager</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" disabled />
                        <span className="text-gray-700">Internal notes added for designer</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" disabled />
                        <span className="text-gray-700">Practice has been notified of submission</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-green-600 text-white rounded-lg p-4 text-center">
                  <p className="font-bold text-lg">All Items Checked? Ready to Submit!</p>
                  <p className="text-sm text-green-100 mt-1">Your workticket will now enter the design queue with all necessary information.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-r from-[#0073EA] to-[#00CA72] text-white rounded-xl p-8 mb-8">
            <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
              <Zap className="w-7 h-7" />
              Need Help with Seazona?
            </h3>
            <p className="mb-4 text-lg">If you encounter any issues while creating worktickets or have questions about specific cases:</p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="font-bold mb-2">Immediate Technical Issues</p>
                <p className="text-sm">Contact IT Support</p>
                <p className="text-xs text-blue-100 mt-1">System errors, upload failures, access problems</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="font-bold mb-2">Clinical Questions</p>
                <p className="text-sm">Contact Team Lead / QC Manager</p>
                <p className="text-xs text-blue-100 mt-1">Case specifications, QC decisions, material selection</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="font-bold mb-2">Designer Coordination</p>
                <p className="text-sm">Contact Design Manager</p>
                <p className="text-xs text-blue-100 mt-1">Assignment issues, timeline concerns, complex cases</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-4">
              <p className="font-bold text-lg mb-2">Golden Rule:</p>
              <p className="text-yellow-200 italic">"Never guess on critical information. It's always better to ask and delay 10 minutes than to create a remake that delays days and costs hundreds of dollars."</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
