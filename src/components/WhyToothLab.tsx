import { Target, Zap, Shield, Users, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function WhyToothLab() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const reasons = [
    {
      icon: Zap,
      title: 'Unmatched speed',
      description: '~15 minute scan QC means you catch issues while the patient is still in the chair. No more costly remakes or frustrated patients.',
      color: 'from-[#FF3D57] to-[#FF6B7F]'
    },
    {
      icon: Target,
      title: 'Precision engineering',
      description: 'Expert CAD technicians with years of experience ensure every restoration fits perfectly the first time.',
      color: 'from-[#0073EA] to-[#4A9FFF]'
    },
    {
      icon: Shield,
      title: 'Complete security',
      description: 'HIPAA-compliant platform with enterprise-grade security. Your patient data is always protected.',
      color: 'from-[#00CA72] to-[#4AE396]'
    },
    {
      icon: Users,
      title: 'White-glove support',
      description: 'Friendly, responsive team ready to help. Get expert guidance whenever you need it.',
      color: 'from-[#FDAB3D] to-[#FFC46D]'
    },
    {
      icon: Sparkles,
      title: 'Flexible workflow',
      description: 'Choose scan QC only, CAD design, or full-service manufacturing. We adapt to your needs.',
      color: 'from-[#9557FF] to-[#B587FF]'
    },
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: '85% fewer remakes, reduced chairtime, and happier patients means more profitable practice.',
      color: 'from-[#FF3D57] to-[#FDAB3D]'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-gray-200 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${reason.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <reason.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">
                  {reason.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-10 transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <Link
            to="/get-started"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF3D57] to-[#FDAB3D] text-white text-base font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Start your free trial
          </Link>
          <p className="text-xs text-gray-500 mt-3">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
