import { AlertTriangle, TrendingDown, Clock, Users, DollarSign, CheckCircle2, Zap, Target, TrendingUp, Smile } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    {
      icon: Users,
      title: 'Patient dissatisfaction',
      description: 'Poorly fitting restorations lead to complaints, lost referrals, and damaged reputation'
    },
    {
      icon: DollarSign,
      title: 'Revenue loss from remakes',
      description: 'Each remake costs $200-500 in materials and lab fees, impacting your bottom line'
    },
    {
      icon: Clock,
      title: 'Wasted chairtime',
      description: 'Extra appointments reduce daily capacity, forcing you to turn away new patients'
    },
    {
      icon: TrendingDown,
      title: 'Production bottlenecks',
      description: 'Waiting days for lab turnaround creates delays and reduces treatment acceptance'
    },
    {
      icon: AlertTriangle,
      title: 'Late error detection',
      description: 'Design flaws discovered at delivery mean starting over from scratch'
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: 'Rapid 15-minute scan quality check',
      description: 'We identify issues before any design work begins, preventing costly remakes'
    },
    {
      icon: Target,
      title: 'Professional CAD design in hours',
      description: 'Expert technicians create precise designs for predictable clinical results'
    },
    {
      icon: CheckCircle2,
      title: 'Up to 85% fewer remakes',
      description: 'Restorations fit correctly the first time, eliminating adjustments and delays'
    },
    {
      icon: TrendingUp,
      title: 'Fast turnaround times',
      description: 'Same-day to 24-hour delivery keeps your schedule moving smoothly'
    },
    {
      icon: Smile,
      title: 'Better patient outcomes',
      description: 'Precise-fitting restorations improve comfort and drive referrals'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Get It Right the{' '}
            <span className="bg-gradient-to-r from-[#00CA72] to-[#0073EA] bg-clip-text text-transparent">
              First Time
            </span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Remakes cost $200-500 plus chairtime. Our expert services eliminate these errors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-to-br from-[#FF3D57] to-[#FF6B7F] p-2 rounded-xl shadow-lg">
                <AlertTriangle className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900">What's costing you</h3>
            </div>
            <div className="space-y-2">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 hover:scale-105 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-red-200">
                    <div className="flex items-start gap-3">
                      <div className="bg-white rounded-lg p-1.5 shadow-sm">
                        <Icon className="text-[#FF3D57]" size={18} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-0.5 text-sm">{problem.title}</h4>
                        <p className="text-xs text-gray-600">{problem.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-to-br from-[#00CA72] to-[#4AE396] p-2 rounded-xl shadow-lg">
                <CheckCircle2 className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900">How we solve it</h3>
            </div>
            <div className="space-y-2">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 hover:scale-105 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-green-200">
                    <div className="flex items-start gap-3">
                      <div className="bg-white rounded-lg p-1.5 shadow-sm">
                        <Icon className="text-[#00CA72]" size={18} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-0.5 text-sm">{solution.title}</h4>
                        <p className="text-xs text-gray-600">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
