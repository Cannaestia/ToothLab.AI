import { Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Pricing() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const subscriptionTiers = [
    {
      name: 'Starter',
      volume: 'Up to 75 scans/month',
      price: '$449',
      perScan: '$5.99',
      features: [
        '~15 min scan analysis',
        'Immediate issue detection',
        'Phone support',
        'Access to CAD design',
        'Access to Lab Finishing',
        'Seazona workticket +$5',
      ],
    },
    {
      name: 'Professional',
      volume: '76-150 scans/month',
      price: '$749',
      perScan: '$4.99',
      features: [
        'Everything in Starter',
        'Dedicated account manager',
        'Monthly reports',
        'Private NAS server access',
        'Custom training sessions',
        'Seazona workticket +$4',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      volume: '151-300 scans/month',
      price: '$1,199',
      perScan: '$3.99',
      features: [
        'Everything in Professional',
        '~10 min Scan Analysis',
        'Volume discounts',
        'Multi-location support',
        'Quarterly business reviews',
        'Seazona workticket +$3',
      ],
    },
  ];

  const tiers = [
    {
      name: 'CAD Design',
      subtitle: 'For clinics with in-house production',
      price: '$25',
      features: [
        'Production-ready CAD design',
        'All restoration types',
        'Real-time communication',
        'You finish in-house',
      ],
      cta: 'Request CAD Design Price list',
      highlighted: true,
    },
    {
      name: 'Full Service',
      subtitle: 'We handle everything',
      price: '$140',
      features: [
        'Scan QC + CAD design',
        'Complete manufacturing',
        'Final restoration delivery',
        'Crown & Bridge',
        'World-class removables',
      ],
      cta: 'Request Full Service Price List',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Plans that{' '}
            <span className="bg-gradient-to-r from-[#FF3D57] to-[#FDAB3D] bg-clip-text text-transparent">
              grow with you
            </span>
          </h2>
        </div>

        <div className={`mb-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
              Monthly Access Plan
            </h3>
            <p className="text-base text-gray-600">
              Enrollment gives your clinic access to near-real-time Scan QC, CAD design and optional lab finishing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {subscriptionTiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl flex flex-col ${
                  tier.highlighted
                    ? 'bg-gradient-to-br from-[#0073EA] to-[#00CA72] text-white shadow-xl border-4 border-white'
                    : 'bg-white border-2 border-gray-200'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3
                  className={`text-2xl font-extrabold mb-2 text-center ${
                    tier.highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mb-6 text-center ${
                    tier.highlighted ? 'text-white/80' : 'text-gray-600'
                  }`}
                >
                  {tier.volume}
                </p>
                <div className="text-center mb-6">
                  <div
                    className={`text-5xl font-black ${
                      tier.highlighted ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {tier.price}
                  </div>
                  <div
                    className={`text-sm mt-2 ${
                      tier.highlighted ? 'text-white/70' : 'text-gray-500'
                    }`}
                  >
                    per month
                  </div>
                  <div
                    className={`text-base font-bold mt-3 px-4 py-2 rounded-full inline-block ${
                      tier.highlighted ? 'bg-white/20 text-white' : 'bg-[#0073EA]/10 text-[#0073EA]'
                    }`}
                  >
                    {tier.perScan} per scan
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check
                        className={`flex-shrink-0 mt-0.5 ${
                          tier.highlighted ? 'text-white' : 'text-[#00CA72]'
                        }`}
                        size={18}
                      />
                      <span
                        className={`text-sm font-medium ${
                          tier.highlighted ? 'text-white/90' : 'text-gray-700'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {tier.highlighted && (
                  <div className="text-xs font-black mb-3 text-white bg-white/20 rounded-full py-1.5 px-4 inline-block mx-auto uppercase tracking-wider text-center">
                    Most Popular
                  </div>
                )}

                <a
                  href={`/checkout?plan=${encodeURIComponent(tier.name)}&price=${encodeURIComponent(tier.price)}`}
                  className={`block w-full py-4 px-6 rounded-full text-center text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    tier.highlighted
                      ? 'bg-white text-[#0073EA] hover:bg-gray-50'
                      : 'bg-gradient-to-r from-[#FF3D57] to-[#FDAB3D] text-white hover:from-[#FF2D47] hover:to-[#FD9B2D]'
                  }`}
                >
                  Access Now
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={`mb-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 rounded-3xl p-8 md:p-12 border-2 border-amber-200 shadow-lg">
            <div className="text-center">
              <div className="inline-block px-6 py-2 bg-amber-400 rounded-full text-gray-900 text-sm font-bold mb-4 shadow-md">
                SPECIAL PRICING
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Introductory Launch Rates
              </h3>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Take advantage of our special introductory pricing available through{' '}
                <span className="font-bold text-amber-600">August 31, 2026</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
            CAD Design & Lab Finishing
          </h3>
          <p className="text-base text-gray-600">
            Affordable rate with highly satisfied results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl flex flex-col ${
                tier.highlighted
                  ? 'bg-gradient-to-br from-[#FDAB3D] to-[#FF3D57] text-white shadow-xl border-4 border-white'
                  : 'bg-white border-2 border-gray-200'
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex-1">
                  <h3
                    className={`text-2xl font-extrabold mb-2 ${
                      tier.highlighted ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      tier.highlighted ? 'text-white/80' : 'text-gray-600'
                    }`}
                  >
                    {tier.subtitle}
                  </p>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-medium mb-1 ${
                    tier.highlighted ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    Starting at
                  </div>
                  {tier.originalPrice && (
                    <div className={`text-sm line-through mb-1 ${
                      tier.highlighted ? 'text-white/50' : 'text-gray-400'
                    }`}>
                      {tier.originalPrice}
                    </div>
                  )}
                  <div className={`text-4xl font-black ${
                    tier.highlighted ? 'text-white' : 'text-gray-900'
                  }`}>
                    {tier.price}
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      className={`flex-shrink-0 mt-0.5 ${
                        tier.highlighted ? 'text-white' : 'text-[#00CA72]'
                      }`}
                      size={18}
                    />
                    <span
                      className={`text-sm font-medium ${
                        tier.highlighted ? 'text-white/90' : 'text-gray-700'
                      } ${feature === 'World-class removables' ? 'font-bold' : ''}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {tier.highlighted && (
                <div className="text-xs font-black mb-4 text-white bg-white/20 rounded-full py-1.5 px-4 inline-block mx-auto uppercase tracking-wider text-center">
                  Most Popular
                </div>
              )}

              <a
                href="/get-started"
                className={`block w-full py-4 px-6 rounded-full text-center text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  tier.highlighted
                    ? 'bg-white text-[#FF3D57] hover:bg-gray-50'
                    : 'bg-gradient-to-r from-[#0073EA] to-[#00CA72] text-white hover:from-[#0063DA] hover:to-[#00BA62]'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
