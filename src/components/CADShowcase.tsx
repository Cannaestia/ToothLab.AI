import { Cpu, Clock, Target, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CADShowcase() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.2);
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.2);
  const features = [
    {
      icon: Target,
      title: 'Precision engineering',
      description: 'Accurate margins and contacts every time',
    },
    {
      icon: Layers,
      title: 'Optimized anatomy',
      description: 'Natural occlusion and aesthetics',
    },
    {
      icon: Clock,
      title: 'Flexible turnaround',
      description: '1hr rush, 6hr standard, 24hr economy',
    },
    {
      icon: Cpu,
      title: 'Complete STL package',
      description: 'Organized folders ready to mill or print',
    },
  ];

  return (
    <section id="cad-design" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            ref={leftRef}
            className={`order-2 lg:order-2 transition-all duration-1000 ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 border-4 border-[#FDAB3D]">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
                  Turnaround Options
                </h3>
                <p className="text-gray-800 text-base">
                  Choose the speed that fits your schedule
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#00CA72]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-black text-gray-900">24 hr</span>
                    <span className="px-4 py-1.5 bg-[#00CA72] text-white text-xs font-black rounded-full">ECONOMY</span>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Most popular option for daily workflow</p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#0073EA]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-black text-gray-900">6 hr</span>
                    <span className="px-4 py-1.5 bg-[#0073EA] text-white text-xs font-black rounded-full">STANDARD</span>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Cost-effective for planned procedures</p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#FF3D57]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-black text-gray-900">1 hr</span>
                    <span className="px-4 py-1.5 bg-[#FF3D57] text-white text-xs font-black rounded-full">RUSH</span>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Emergency cases and urgent needs</p>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={rightRef}
            className={`order-1 lg:order-1 transition-all duration-1000 ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="inline-block px-4 py-1.5 bg-amber-100 border-2 border-amber-200 rounded-full text-amber-700 text-sm font-semibold mb-6">
              Precision CAD Design
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Digital designs<br />engineered for perfection
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Every CAD file is precision-engineered by experienced technicians. Receive a complete folder with production-ready STL files—simply mill or print.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-orange-400 flex items-center justify-center">
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
              to="/price-list"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#FDAB3D] to-[#FF3D57] text-white text-base font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              CAD Design Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
