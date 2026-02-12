import { Smile, Clock, Heart, Award } from 'lucide-react';

export default function PatientBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'No callbacks',
      description: 'Issues caught and fixed in the same appointment',
      color: 'bg-blue-600',
    },
    {
      icon: Smile,
      title: 'Better outcomes',
      description: 'High-quality scans lead to better-fitting restorations',
      color: 'bg-green-600',
    },
    {
      icon: Heart,
      title: 'Less stress',
      description: 'Fewer appointments and faster treatment completion',
      color: 'bg-amber-600',
    },
    {
      icon: Award,
      title: 'Premium care',
      description: 'Advanced technology ensuring precision from day one',
      color: 'bg-slate-800',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-pink-100 rounded-full text-pink-700 text-sm font-semibold mb-4">
            Patient Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Better for your patients too
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            When you catch scan issues early, everyone wins
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-slate-200"
            >
              <div className={`${benefit.color} rounded-xl w-12 h-12 flex items-center justify-center mb-4 shadow-md`}>
                <benefit.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
