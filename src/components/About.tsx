import { Link } from 'react-router-dom';
import { Workflow, Zap, Target, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
            About ToothLab.AI
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              ToothLab AI is a dental workflow automation platform built to support dental clinics and dental laboratories with speed, clarity, and consistency. We streamline the front half of production by automating scan intake, quality control, case setup, and CAD coordination--eliminating common bottlenecks that lead to remakes, delays, and wasted chair time. Our system brings structure to the digital handoff, so every case starts clean and moves efficiently toward completion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Core Automation
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Workflow className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">
                Scan Intake
              </h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">
                Quality Control
              </h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">
                Case Setup
              </h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">
                CAD Coordination
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 sm:p-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Built by Dental Industry Professionals
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Built by dental industry professionals, ToothLab AI was designed around real-world lab and clinical challenges. For dentists, we help ensure better scans, faster turnaround, and fewer surprises. For labs, we deliver predictable intake, organized files, and scalable digital workflows without adding operational burden.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6 font-medium">
              We support all with intelligent systems that allow human expertise to perform at its highest level.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            What We Deliver
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-5">
                For Dentists
              </h3>
              <ul className="space-y-3 text-base text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Better scans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Faster turnaround</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Pre-screened finished restorations</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-5">
                For Labs
              </h3>
              <ul className="space-y-3 text-base text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Predictable intake</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Organized files</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Scalable digital workflows</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Ready to Streamline Your Workflow?
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Whether you're a dental clinic or laboratory, ToothLab AI helps you eliminate friction and deliver consistent results.
          </p>
          <Link
            to="/get-started"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full hover:from-blue-600 hover:to-cyan-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
