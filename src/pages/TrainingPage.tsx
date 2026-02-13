import { CheckCircle, XCircle, MessageSquare, Upload, Send, ArrowRight, Clock, FileCheck, FolderOpen, Workflow, Download, CheckSquare, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              VA Schedule & Role
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete guide to the ToothLab.Ai workflow system.<br />
              Keep everyone on the same page with these easy-to-follow instructions.
            </p>
          </div>

          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#0073EA] to-[#00CA72] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">1</span>
                VA Daily Schedule Overview
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-xl mb-2">6 AM - 9 AM: File Transfer & Delivery</h3>
                      <p className="text-gray-700 mb-3">Transfer completed design files from designers to practices</p>

                      <div className="bg-white rounded-lg p-4 space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                          <div>
                            <p className="font-semibold text-gray-900">Check Designer Output Folders</p>
                            <p className="text-sm text-gray-600">Review all folders where designers upload completed work (Dropbox/Google Drive/Seazona)</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                          <div>
                            <p className="font-semibold text-gray-900">Download Design Files</p>
                            <p className="text-sm text-gray-600">Download STL files, PDFs, and any related design documentation</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                          <div>
                            <p className="font-semibold text-gray-900">Quality Check Files</p>
                            <p className="text-sm text-gray-600">Verify files are not corrupted, can be opened, and match the case requirements</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                          <div>
                            <p className="font-semibold text-gray-900">Send to Practice</p>
                            <p className="text-sm text-gray-600">Upload files to practice's preferred method (email, Dropbox link, file transfer service)</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</div>
                          <div>
                            <p className="font-semibold text-gray-900">Notify Practice</p>
                            <p className="text-sm text-gray-600">Send WhatsApp/SMS notification that files are ready with instructions on how to access</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">6</div>
                          <div>
                            <p className="font-semibold text-gray-900">Update Tracking Sheet</p>
                            <p className="text-sm text-gray-600">Mark case as "Delivered" with date and time in your case tracking spreadsheet</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 bg-blue-600 text-white rounded-lg p-3">
                        <p className="text-sm font-semibold">Why This Time Block?</p>
                        <p className="text-xs text-blue-100 mt-1">Designers typically complete work overnight. Early morning delivery ensures practices have files before their patients arrive.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-xl mb-2">9 AM - 12 PM: Incoming Work Processing</h3>
                      <p className="text-gray-700 mb-3">Process new scans, perform QC, create worktickets, manage communications</p>

                      <div className="bg-white rounded-lg p-4 space-y-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <p className="font-bold text-gray-900">Task 1: Scan Quality Control (QC)</p>
                          </div>
                          <div className="ml-7 space-y-2 text-sm">
                            <div className="bg-gray-50 rounded p-3">
                              <p className="font-semibold text-gray-900 mb-1">What to do:</p>
                              <ul className="text-gray-700 space-y-1 text-xs">
                                <li>• Check WhatsApp/email for new scan submissions from practices</li>
                                <li>• Download scan files to working directory</li>
                                <li>• Open scans in viewer software (Meshmixer, 3Shape, etc.)</li>
                                <li>• Evaluate scan quality: margin clarity, tissue capture, artifact-free, proper arch alignment</li>
                                <li>• Apply appropriate QC standard (Moderate or Hard QC based on case type)</li>
                                <li>• Take screenshots of any issues if scan fails</li>
                              </ul>
                            </div>
                            <div className="bg-green-50 rounded p-2 border border-green-200">
                              <p className="text-xs text-green-900"><span className="font-bold">Pass:</span> Move to Seazona workticket creation</p>
                            </div>
                            <div className="bg-red-50 rounded p-2 border border-red-200">
                              <p className="text-xs text-red-900"><span className="font-bold">Fail:</span> Contact practice via WhatsApp with specific feedback on what needs to be rescanned</p>
                            </div>
                          </div>
                        </div>

                        <div className="border-t pt-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Upload className="w-5 h-5 text-green-600" />
                            <p className="font-bold text-gray-900">Task 2: Create Seazona Workticket</p>
                          </div>
                          <div className="ml-7 space-y-2 text-sm">
                            <div className="bg-gray-50 rounded p-3">
                              <p className="font-semibold text-gray-900 mb-1">What to do:</p>
                              <ul className="text-gray-700 space-y-1 text-xs">
                                <li>• Log into Seazona system</li>
                                <li>• Click "Create New Workticket"</li>
                                <li>• Fill in all required fields: practice name, doctor, patient info, tooth numbers, restoration type, material, shade</li>
                                <li>• Upload approved scan files</li>
                                <li>• Add QC notes and any special instructions</li>
                                <li>• Assign to appropriate designer or mark for manager assignment</li>
                                <li>• Set due date based on priority (standard/rush/emergency)</li>
                                <li>• Submit workticket and save ticket number</li>
                              </ul>
                            </div>
                            <p className="text-xs text-gray-600 italic ml-3">See detailed guide in: <Link to="/members" className="text-blue-600 hover:underline">Members Portal - Seazona Workticket SOP</Link></p>
                          </div>
                        </div>

                        <div className="border-t pt-3">
                          <div className="flex items-center gap-2 mb-2">
                            <MessageSquare className="w-5 h-5 text-green-600" />
                            <p className="font-bold text-gray-900">Task 3: Chatbot Management</p>
                          </div>
                          <div className="ml-7 space-y-2 text-sm">
                            <div className="bg-gray-50 rounded p-3">
                              <p className="font-semibold text-gray-900 mb-1">What to do:</p>
                              <ul className="text-gray-700 space-y-1 text-xs">
                                <li>• Monitor chatbot conversations on website</li>
                                <li>• Respond to practice questions in real-time</li>
                                <li>• Guide practices through scan submission process</li>
                                <li>• Collect case information via chat</li>
                                <li>• Escalate complex questions to management</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="border-t pt-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Send className="w-5 h-5 text-green-600" />
                            <p className="font-bold text-gray-900">Task 4: Form Submission Processing</p>
                          </div>
                          <div className="ml-7 space-y-2 text-sm">
                            <div className="bg-gray-50 rounded p-3">
                              <p className="font-semibold text-gray-900 mb-1">What to do:</p>
                              <ul className="text-gray-700 space-y-1 text-xs">
                                <li>• Check for new form submissions from website contact forms</li>
                                <li>• Review demo requests and add to CRM</li>
                                <li>• Process new practice signup forms</li>
                                <li>• Respond to general inquiries within 1 hour</li>
                                <li>• Forward pricing/sales inquiries to appropriate team member</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 bg-green-600 text-white rounded-lg p-3">
                        <p className="text-sm font-semibold">Peak Hours Alert</p>
                        <p className="text-xs text-green-100 mt-1">This is typically the busiest time. Practices are active, scans are coming in, and you need to be highly responsive on all channels.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                      <FolderOpen className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-xl mb-2">12 PM - 3 PM: QC & Designer Allocation</h3>
                      <p className="text-gray-700 mb-3">Continue scan QC, create worktickets, and organize files for designers</p>

                      <div className="bg-white rounded-lg p-4 space-y-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CheckSquare className="w-5 h-5 text-yellow-700" />
                            <p className="font-bold text-gray-900">Task 1: Scan QC (Continued)</p>
                          </div>
                          <div className="ml-7 space-y-2 text-sm">
                            <p className="text-gray-700 text-xs">Same process as morning session - evaluate incoming scans for quality and design readiness</p>
                          </div>
                        </div>

                        <div className="border-t pt-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Upload className="w-5 h-5 text-yellow-700" />
                            <p className="font-bold text-gray-900">Task 2: Create Seazona Worktickets</p>
                          </div>
                          <div className="ml-7 space-y-2 text-sm">
                            <p className="text-gray-700 text-xs">Create worktickets for all approved scans from morning and afternoon sessions</p>
                          </div>
                        </div>

                        <div className="border-t pt-3">
                          <div className="flex items-center gap-2 mb-2">
                            <FolderOpen className="w-5 h-5 text-yellow-700" />
                            <p className="font-bold text-gray-900">Task 3: Allocate Folders to Designers</p>
                          </div>
                          <div className="ml-7 space-y-2 text-sm">
                            <div className="bg-gray-50 rounded p-3">
                              <p className="font-semibold text-gray-900 mb-1">What to do:</p>
                              <ul className="text-gray-700 space-y-1 text-xs">
                                <li>• Organize scan files into designer-specific folders</li>
                                <li>• Create folder structure: [Practice Name]_[Patient Name]_[CaseID]_[Tooth#]</li>
                                <li>• Include all necessary files: scans, bite registration, reference photos, prescription form</li>
                                <li>• Add a case brief document with key information from workticket</li>
                                <li>• Move organized folder to designer's assigned directory</li>
                                <li>• Send notification to designer that case is ready</li>
                                <li>• Update workticket status to "Assigned - Files Ready"</li>
                              </ul>
                            </div>
                            <div className="bg-yellow-50 rounded p-2 border border-yellow-300">
                              <p className="text-xs text-yellow-900"><span className="font-bold">Important:</span> Double-check folder naming matches workticket information to avoid confusion</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 bg-yellow-600 text-white rounded-lg p-3">
                        <p className="text-sm font-semibold">Organization is Key</p>
                        <p className="text-xs text-yellow-100 mt-1">Proper file organization prevents delays, confusion, and design errors. Take time to set up folders correctly.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                      <Workflow className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-xl mb-2">3 PM - 6 PM: Final Processing & Handoff</h3>
                      <p className="text-gray-700 mb-3">Complete remaining QC tasks, finalize worktickets, prepare for designer shift</p>

                      <div className="bg-white rounded-lg p-4 space-y-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CheckSquare className="w-5 h-5 text-orange-700" />
                            <p className="font-bold text-gray-900">Task 1: Final Scan QC Batch</p>
                          </div>
                          <div className="ml-7 space-y-2 text-sm">
                            <p className="text-gray-700 text-xs">Process any remaining scans received throughout the day</p>
                          </div>
                        </div>

                        <div className="border-t pt-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Upload className="w-5 h-5 text-orange-700" />
                            <p className="font-bold text-gray-900">Task 2: Complete All Worktickets</p>
                          </div>
                          <div className="ml-7 space-y-2 text-sm">
                            <p className="text-gray-700 text-xs">Ensure every approved scan from the day has a corresponding workticket created</p>
                          </div>
                        </div>

                        <div className="border-t pt-3">
                          <div className="flex items-center gap-2 mb-2">
                            <FolderOpen className="w-5 h-5 text-orange-700" />
                            <p className="font-bold text-gray-900">Task 3: Final Folder Allocation</p>
                          </div>
                          <div className="ml-7 space-y-2 text-sm">
                            <p className="text-gray-700 text-xs">Organize and transfer all remaining approved cases to designer folders</p>
                          </div>
                        </div>

                        <div className="border-t pt-3">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertCircle className="w-5 h-5 text-orange-700" />
                            <p className="font-bold text-gray-900">Task 4: End-of-Day Wrap-Up</p>
                          </div>
                          <div className="ml-7 space-y-2 text-sm">
                            <div className="bg-gray-50 rounded p-3">
                              <p className="font-semibold text-gray-900 mb-1">What to do:</p>
                              <ul className="text-gray-700 space-y-1 text-xs">
                                <li>• Update case tracking spreadsheet with all day's activities</li>
                                <li>• Respond to any pending WhatsApp messages</li>
                                <li>• Set up auto-reply for after-hours inquiries</li>
                                <li>• Flag any urgent cases that need overnight priority</li>
                                <li>• Prepare handoff notes for next shift if applicable</li>
                                <li>• Document any issues or blockers encountered</li>
                                <li>• Send summary report to supervisor (cases processed, issues, metrics)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 bg-orange-600 text-white rounded-lg p-3">
                        <p className="text-sm font-semibold">Clean Handoff Protocol</p>
                        <p className="text-xs text-orange-100 mt-1">Designers start work after your shift. A clean handoff with organized files and clear notes ensures they can start immediately without delays.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
