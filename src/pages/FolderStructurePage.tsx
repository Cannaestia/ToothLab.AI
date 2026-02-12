import { ArrowLeft, FolderOpen, Upload, Download, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FolderStructurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/members"
          className="inline-flex items-center gap-2 text-[#0073EA] hover:text-[#0063DA] font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Members Area
        </Link>

        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0073EA]/10 to-[#00CA72]/10 rounded-2xl mb-6">
              <FolderOpen className="w-10 h-10 text-[#0073EA]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Folder Structure
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Complete guide for organizing and naming files when working with designers
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#00CA72]/10 rounded-xl flex items-center justify-center">
                  <Download className="w-6 h-6 text-[#00CA72]" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  What to Expect from Designer
                </h2>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-slate-50 rounded-2xl p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Deliverable Files</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00CA72] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-900">Design Files (.stl)</p>
                        <p className="text-slate-600 text-sm">Final restoration design ready for milling</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00CA72] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-900">Native CAD Files (optional)</p>
                        <p className="text-slate-600 text-sm">3Shape, exocad, or other software native files for future modifications</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00CA72] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-900">Screenshots/Renders</p>
                        <p className="text-slate-600 text-sm">Visual preview images of the design from multiple angles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00CA72] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-900">Design Report (if requested)</p>
                        <p className="text-slate-600 text-sm">Technical specifications and measurements</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Folder Naming Convention (FROM DESIGNER)</h3>
                  <div className="bg-white rounded-xl p-6 border-2 border-[#00CA72]/20">
                    <div className="space-y-4">
                      <div>
                        <p className="font-mono text-lg text-[#00CA72] font-semibold mb-2">
                          COMPLETED_PatientLastName_FirstName_ToothNumbers_MaterialType
                        </p>
                        <p className="text-slate-600 text-sm">Examples:</p>
                        <ul className="list-disc list-inside text-slate-700 space-y-1 mt-2 ml-4">
                          <li className="font-mono text-sm">COMPLETED_Smith_John_14-15_Zirconia</li>
                          <li className="font-mono text-sm">COMPLETED_Johnson_Mary_8-9_Emax</li>
                          <li className="font-mono text-sm">COMPLETED_Williams_Robert_3_PFM</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">File Naming Inside Completed Folder</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#00CA72] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-slate-900">#14_Crown.stl</p>
                        <p className="text-slate-600">Individual tooth design file (repeat for each tooth)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#00CA72] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-slate-900">#14-15_Bridge.stl</p>
                        <p className="text-slate-600">Multi-unit restoration file</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#00CA72] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-slate-900">Preview_Occlusal.jpg</p>
                        <p className="text-slate-600">Top view screenshot</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#00CA72] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-slate-900">Preview_Buccal.jpg</p>
                        <p className="text-slate-600">Front/side view screenshot</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#00CA72] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-slate-900">Native_Design.dcm / .3oxz / .exoplan</p>
                        <p className="text-slate-600">Native CAD software file (optional)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0073EA]/10 rounded-xl flex items-center justify-center">
                  <Upload className="w-6 h-6 text-[#0073EA]" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  What to Send to Designer
                </h2>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Required Files</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00CA72] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-900">Scan Files (.stl or .ply)</p>
                        <p className="text-slate-600 text-sm">Upper and lower arch scans, bite registration if applicable</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00CA72] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-900">Prescription/Work Order</p>
                        <p className="text-slate-600 text-sm">PDF or image file with dentist instructions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00CA72] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-900">Pre-op Photos (if available)</p>
                        <p className="text-slate-600 text-sm">Intraoral or smile photos for reference</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00CA72] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-900">Case Details</p>
                        <p className="text-slate-600 text-sm">Patient name, tooth numbers, material specifications, shade</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Folder Naming Convention (TO DESIGNER)</h3>
                  <div className="bg-white rounded-xl p-6 border-2 border-[#0073EA]/20">
                    <div className="space-y-4">
                      <div>
                        <p className="font-mono text-lg text-[#0073EA] font-semibold mb-2">
                          PatientLastName_FirstName_ToothNumbers_MaterialType
                        </p>
                        <p className="text-slate-600 text-sm">Examples:</p>
                        <ul className="list-disc list-inside text-slate-700 space-y-1 mt-2 ml-4">
                          <li className="font-mono text-sm">Smith_John_14-15_Zirconia</li>
                          <li className="font-mono text-sm">Johnson_Mary_8-9_Emax</li>
                          <li className="font-mono text-sm">Williams_Robert_3_PFM</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">File Naming Inside Folder</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#0073EA] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-slate-900">Upper.stl</p>
                        <p className="text-slate-600">Upper arch scan</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#0073EA] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-slate-900">Lower.stl</p>
                        <p className="text-slate-600">Lower arch scan</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#0073EA] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-slate-900">Bite.stl</p>
                        <p className="text-slate-600">Bite registration (if applicable)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#0073EA] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-slate-900">Prescription.pdf</p>
                        <p className="text-slate-600">Work order/prescription</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#0073EA] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-slate-900">Photos.jpg</p>
                        <p className="text-slate-600">Reference photos (if any)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FolderOpen className="w-7 h-7 text-[#0073EA]" />
                Complete Folder Structure Example
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Upload className="w-5 h-5 text-[#0073EA]" />
                    To Designer
                  </h3>
                  <div className="bg-white rounded-xl p-4 font-mono text-sm border-2 border-[#0073EA]/20">
                    <div className="space-y-1 text-slate-700">
                      <div className="font-bold text-[#0073EA]">📁 Smith_John_14-15_Zirconia/</div>
                      <div className="ml-4">📄 Upper.stl</div>
                      <div className="ml-4">📄 Lower.stl</div>
                      <div className="ml-4">📄 Bite.stl</div>
                      <div className="ml-4">📄 Prescription.pdf</div>
                      <div className="ml-4">📄 Photos.jpg</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Download className="w-5 h-5 text-[#00CA72]" />
                    From Designer
                  </h3>
                  <div className="bg-white rounded-xl p-4 font-mono text-sm border-2 border-[#00CA72]/20">
                    <div className="space-y-1 text-slate-700">
                      <div className="font-bold text-[#00CA72]">📁 COMPLETED_Smith_John_14-15_Zirconia/</div>
                      <div className="ml-4">📄 #14_Crown.stl</div>
                      <div className="ml-4">📄 #15_Crown.stl</div>
                      <div className="ml-4">📄 Preview_Occlusal.jpg</div>
                      <div className="ml-4">📄 Preview_Buccal.jpg</div>
                      <div className="ml-4">📄 Preview_Lingual.jpg</div>
                      <div className="ml-4">📄 Native_Design.dcm</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Important Notes</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Always use underscores (_) instead of spaces in file and folder names</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Keep file names clear and consistent across all cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Include tooth numbers using standard dental notation (e.g., #14, #15)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Ensure all scan files are properly aligned before sending to designer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Verify folder names match between sent and received files for easy tracking</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
