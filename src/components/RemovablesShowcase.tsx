import { CheckCircle2, Award, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RemovablesShowcase() {
  const features = [
    {
      icon: Award,
      title: 'Expert craftsmanship',
      description: 'Technicians with 10+ years removable experience',
    },
    {
      icon: CheckCircle2,
      title: 'Optimal fit & retention',
      description: 'Precision designs for patient comfort',
    },
    {
      icon: Users,
      title: 'Patient-focused',
      description: 'Aesthetics and function in harmony',
    },
    {
      icon: Zap,
      title: 'Rigorous QC',
      description: 'Every design triple-checked before delivery',
    },
  ];

  return (
    <section id="removables" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-semibold mb-4">
              World-Class Removables
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Removable prostheses that set the standard
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Our removable designs aren't just good—they're exceptional. Each prosthesis is meticulously crafted by specialists who understand the nuances of fit, retention, aesthetics, and patient comfort.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-green-400 flex items-center justify-center">
                      <feature.icon className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/pricing"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#FDE047] to-[#00CA72] text-white text-base font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Full Service Pricing
            </Link>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-4 border-green-500">
              <div className="overflow-hidden rounded-2xl mb-4" style={{ maxHeight: '450px' }}>
                <img
                  src="/Gemini_Generated_Image_pfpo2gpfpo2gpfpo.png"
                  alt="Before and after dental restoration showing transformation"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  Superior clinical outcomes
                </p>
                <p className="text-xs text-slate-600">
                  Our removable designs deliver the fit, comfort, and aesthetics your patients deserve
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
