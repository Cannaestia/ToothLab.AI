import { useState } from 'react';
import { Send, CheckCircle, ChevronDown } from 'lucide-react';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

export default function DemoForm() {
  const [formData, setFormData] = useState({
    clinicName: '',
    contactName: '',
    email: '',
    phone: '',
    monthlyVolume: '',
    qcTier: '',
    priceListTypes: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clinicName: formData.clinicName,
          contactName: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          monthlyVolume: formData.monthlyVolume,
          qcTier: formData.qcTier,
          priceListTypes: formData.priceListTypes.join(', '),
          timestamp: new Date().toISOString(),
        }),
      });

      setSubmitted(true);
      setFormData({
        clinicName: '',
        contactName: '',
        email: '',
        phone: '',
        monthlyVolume: '',
        qcTier: '',
        priceListTypes: [],
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePriceListChange = (value: string) => {
    setFormData((prev) => {
      const newTypes = prev.priceListTypes.includes(value)
        ? prev.priceListTypes.filter((t) => t !== value)
        : [...prev.priceListTypes, value];
      return { ...prev, priceListTypes: newTypes };
    });
  };

  const scrollToTiers = () => {
    const tiersSection = document.getElementById('tiers-section');
    if (tiersSection) {
      tiersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#FFF8E7] to-[#FFD700]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-[#FFD700]/30 rounded-full text-gray-900 text-sm font-bold mb-4">
            START YOUR FREE TRIAL
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Ready to transform your practice?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            FREE Scan QC for a week. No credit card required.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">

        <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-white/20">
          {submitted ? (
            <div className="text-center py-12">
              <div className="bg-gradient-to-br from-[#00CA72] to-[#4AE396] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Send className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-3">
                Welcome aboard!
              </h3>
              <p className="text-lg text-gray-600">
                Check your email for next steps. We'll be in touch within 1 business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="clinicName" className="block text-sm font-bold text-gray-700 mb-2">
                    Clinic name
                  </label>
                  <input
                    type="text"
                    id="clinicName"
                    name="clinicName"
                    value={formData.clinicName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0073EA] focus:border-[#0073EA] outline-none transition-all hover:border-gray-300"
                  />
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-sm font-bold text-gray-700 mb-2">
                    Contact name
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0073EA] focus:border-[#0073EA] outline-none transition-all hover:border-gray-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0073EA] focus:border-[#0073EA] outline-none transition-all hover:border-gray-300"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0073EA] focus:border-[#0073EA] outline-none transition-all hover:border-gray-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="monthlyVolume" className="block text-sm font-bold text-gray-700 mb-2">
                  Monthly case volume
                </label>
                <select
                  id="monthlyVolume"
                  name="monthlyVolume"
                  value={formData.monthlyVolume}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0073EA] focus:border-[#0073EA] outline-none transition-all bg-white hover:border-gray-300"
                >
                  <option value="">Select volume range</option>
                  <option value="up-to-75">Up to 75 scans/month (Starter)</option>
                  <option value="76-150">76-150 scans/month (Professional)</option>
                  <option value="151-300">151-300 scans/month (Enterprise)</option>
                  <option value="300+">300+ scans/month (Custom)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-4">
                  Choose your QC tier
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className={`relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.qcTier === 'moderate'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 bg-white'
                  }`}>
                    <input
                      type="radio"
                      name="qcTier"
                      value="moderate"
                      checked={formData.qcTier === 'moderate'}
                      onChange={handleChange}
                      required
                      className="sr-only"
                    />
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">Tier 1</div>
                      <span className="font-bold text-gray-900">Moderate QC</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2 italic">"Clinically Acceptable Standard"</p>
                    <div className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>High-volume GP offices</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-gray-700 mt-1">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Faster pass rate</span>
                    </div>
                  </label>

                  <label className={`relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.qcTier === 'hard'
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-red-300 bg-white'
                  }`}>
                    <input
                      type="radio"
                      name="qcTier"
                      value="hard"
                      checked={formData.qcTier === 'hard'}
                      onChange={handleChange}
                      required
                      className="sr-only"
                    />
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">Tier 2</div>
                      <span className="font-bold text-gray-900">Hard QC</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2 italic">"High-Grade Precision Standard"</p>
                    <div className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Esthetic & implant cases</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-gray-700 mt-1">
                      <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Zero remake risk priority</span>
                    </div>
                  </label>
                </div>
                <button
                  type="button"
                  onClick={scrollToTiers}
                  className="mt-3 text-sm text-[#0073EA] hover:underline flex items-center gap-1"
                >
                  <ChevronDown className="w-4 h-4" />
                  Learn more about QC tiers
                </button>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-4">
                  Request price list (optional)
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className={`relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.priceListTypes.includes('cad-design')
                      ? 'border-[#0073EA] bg-blue-50'
                      : 'border-gray-200 hover:border-[#0073EA]/50 bg-white'
                  }`}>
                    <input
                      type="checkbox"
                      checked={formData.priceListTypes.includes('cad-design')}
                      onChange={() => handlePriceListChange('cad-design')}
                      className="sr-only"
                    />
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-gray-900">CAD Design Price List</span>
                    </div>
                    <p className="text-sm text-gray-600">Request pricing for digital design services</p>
                  </label>

                  <label className={`relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.priceListTypes.includes('lab-finishing')
                      ? 'border-[#0073EA] bg-blue-50'
                      : 'border-gray-200 hover:border-[#0073EA]/50 bg-white'
                  }`}>
                    <input
                      type="checkbox"
                      checked={formData.priceListTypes.includes('lab-finishing')}
                      onChange={() => handlePriceListChange('lab-finishing')}
                      className="sr-only"
                    />
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-gray-900">Lab Finishing Price List</span>
                    </div>
                    <p className="text-sm text-gray-600">Request pricing for lab finishing services</p>
                  </label>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-gradient-to-r from-[#FF3D57] to-[#FDAB3D] text-white text-lg font-bold rounded-full hover:scale-105 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? 'Submitting...' : 'Contact Us'}
                <Send size={20} />
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Free trial • No credit card required • Cancel anytime
              </p>
            </form>
          )}
        </div>
        </div>

        <div id="tiers-section" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Scan QC Access — 2 Tiers
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold">Tier 1</div>
                <h3 className="text-2xl font-bold text-gray-900">Moderate QC</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4 italic">"Clinically Acceptable Standard"</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Who it's for:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>High-volume GP offices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>In-house milling/printing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Experienced scanners</span>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">QC Behavior:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Flags critical failures only</li>
                  <li>• Missing margins</li>
                  <li>• Severe pull/holes</li>
                  <li>• Wrong scan type</li>
                  <li>• Allows minor imperfections if clinically acceptable</li>
                </ul>
              </div>

              <div className="bg-blue-100 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">Outcome:</h4>
                <p className="text-sm text-gray-700">Faster pass rate • Fewer rescan requests • Keeps chairs moving</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold">Tier 2</div>
                <h3 className="text-2xl font-bold text-gray-900">Hard QC</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4 italic">"High-Grade Precision Standard"</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Who it's for:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Zero remake risk priority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Esthetic cases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Implant restorations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Full-arch/complex cases</span>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">QC Behavior:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Flags everything</li>
                  <li>• Margin noise</li>
                  <li>• Tissue distortion</li>
                  <li>• Scan stitching issues</li>
                  <li>• Bite ambiguity</li>
                  <li>• Requires clean, ideal scan</li>
                </ul>
              </div>

              <div className="bg-red-100 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">Outcome:</h4>
                <p className="text-sm text-gray-700">More rescans upfront • Much lower remake rate • Best design accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
