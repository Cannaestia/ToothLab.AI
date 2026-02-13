import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollAnimation(0.2);

  const faqs = [
    {
      question: 'What\'s included in scan QC?',
      answer: 'Our scan QC process includes comprehensive analysis of scan quality, margin clarity, interproximal contacts, and occlusion. We provide clear pass/fail feedback with specific recommendations on what needs to be rescanned if issues are found.',
    },
    {
      question: 'How fast is turnaround?',
      answer: 'Our target QC turnaround is approximately 15 minutes from submission. This near-real-time feedback means you can often catch and fix scan issues while the patient is still in the chair, eliminating costly remakes and wasted time.',
    },
    {
      question: 'What makes your removable design world-class?',
      answer: 'Our removable prosthesis designs are crafted by expert technicians with years of specialized experience. We focus on optimal fit, retention, patient comfort, and aesthetics. Every design undergoes rigorous quality checks before delivery, ensuring superior clinical outcomes.',
    },
    {
      question: 'What scanners/files do we support?',
      answer: 'We support all major intraoral scanner formats including 3Shape, iTero, DS Core, Medit, and more. Our system accepts STL files and most proprietary scanner formats.',
    },
    {
      question: 'What happens if QC fails?',
      answer: 'If a scan fails QC, we provide detailed feedback on exactly what needs to be corrected. You\'ll receive specific guidance on which areas to rescan, allowing your team to fix issues immediately while the patient is still available.',
    },
    {
      question: 'What does finishing include?',
      answer: 'Our full-service option handles the complete production workflow including milling or printing, post-processing, quality control, and delivery. We manage the entire outsourced production process so you can focus on patient care.',
    },
    {
      question: 'How do we submit cases?',
      answer: 'Case submission is simple through your IO Scanner. Upload your scan files, provide case details, and we take it from there. You\'ll receive updates throughout the process.',
    },
    {
      question: 'Pricing: per case or monthly?',
      answer: 'We offer flexible pricing models to fit your practice volume. We offer per-case pricing for lab finishing and monthly subscription for monthly Scan QC.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div ref={ref} className="max-w-3xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Got{' '}
            <span className="bg-gradient-to-r from-[#9557FF] to-[#FF3D57] bg-clip-text text-transparent">
              questions?
            </span>
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-xl overflow-hidden hover:bg-gray-100 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                className="w-full px-5 py-4 flex items-center justify-between text-left transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-sm font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className={`transition-all duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? (
                    <Minus className="text-[#9557FF]" size={18} />
                  ) : (
                    <Plus className="text-gray-400" size={18} />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-4 pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
