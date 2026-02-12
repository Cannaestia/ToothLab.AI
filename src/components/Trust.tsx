import { Shield, Users, Star, Award, Headphones, Zap } from 'lucide-react';

export default function Trust() {
  const trustMarkers = [
    {
      icon: Shield,
      title: 'HIPAA compliant',
      description: 'Your data is secure',
      bgColor: 'bg-gradient-to-br from-purple-600 to-purple-700',
    },
    {
      icon: Headphones,
      title: 'Expert support',
      description: 'Friendly & responsive',
      bgColor: 'bg-gradient-to-br from-purple-600 to-purple-700',
    },
    {
      icon: Star,
      title: 'Patient-focused',
      description: 'Better outcomes & satisfaction',
      bgColor: 'bg-gradient-to-br from-purple-600 to-purple-700',
    },
    {
      icon: Award,
      title: 'Premium quality',
      description: 'Industry-leading designs',
      bgColor: 'bg-gradient-to-br from-purple-600 to-purple-700',
    },
    {
      icon: Zap,
      title: 'Fast delivery',
      description: 'Multiple turnaround options',
      bgColor: 'bg-gradient-to-br from-purple-600 to-purple-700',
    },
    {
      icon: Users,
      title: 'Easy integration',
      description: 'Works with your workflow',
      bgColor: 'bg-gradient-to-br from-purple-600 to-purple-700',
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {trustMarkers.map((marker, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-3 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className={`${marker.bgColor} rounded-lg w-7 h-7 flex items-center justify-center mx-auto mb-2 shadow-lg`}>
                <marker.icon className="text-yellow-300" size={14} />
              </div>
              <h3 className="text-xs font-bold text-gray-900 mb-0.5">
                {marker.title}
              </h3>
              <p className="text-[10px] text-gray-600">
                {marker.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
