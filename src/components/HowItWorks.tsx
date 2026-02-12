import { Upload, Smile, Wrench, Package, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const steps = [
    {
      icon: Upload,
      title: 'Upload scan',
      description: 'Submit files instantly',
      bgColor: 'bg-gradient-to-br from-[#FF3D57] to-[#FF6B7F]',
      numberColor: 'text-[#FF3D57]',
      number: '01',
    },
    {
      icon: Smile,
      title: 'Get QC feedback',
      description: '~15 min turnaround',
      bgColor: 'bg-gradient-to-br from-[#0073EA] to-[#4A9FFF]',
      numberColor: 'text-[#0073EA]',
      number: '02',
    },
    {
      icon: Wrench,
      title: 'CAD design',
      description: 'Production-ready design',
      bgColor: 'bg-gradient-to-br from-[#FDAB3D] to-[#FFC46D]',
      numberColor: 'text-[#FDAB3D]',
      number: '03',
    },
    {
      icon: Package,
      title: 'Final delivery',
      description: 'In-house or full service',
      bgColor: 'bg-gradient-to-br from-[#00CA72] to-[#4AE396]',
      numberColor: 'text-[#00CA72]',
      number: '04',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[3fr,1fr] gap-0 items-stretch">
          <div className="bg-blue-400 rounded-[3rem] shadow-2xl p-12 flex items-center">
            <div className="grid md:grid-cols-4 gap-6 w-full">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-xl ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/3 -right-3 z-10 items-center justify-center w-6 h-6 bg-white rounded-full shadow-md">
                      <ArrowRight size={14} className="text-gray-400" />
                    </div>
                  )}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`${step.bgColor} rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <step.icon className="text-white" size={28} />
                    </div>
                    <div className={`text-4xl font-black ${step.numberColor} leading-none pt-1`}>
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative overflow-hidden rounded-[3rem] shadow-2xl transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <img
              src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Dental professionals collaborating on patient care"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
