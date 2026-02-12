import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);

  return (
    <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h1
            ref={titleRef}
            className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.1] transition-all duration-700 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            Fix bad scans{' '}
            <span className="bg-gradient-to-r from-[#FF3D57] via-[#FDAB3D] to-[#FF3D57] bg-clip-text text-transparent">
              before
            </span>{' '}
            the patient leaves
          </h1>
          <div
            ref={contentRef}
            className={`text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed transition-all duration-700 delay-100 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <p>
              Power your chairside dentistry with near-real-time scan quality checks and precision CAD design — from in-house support to finished restorations.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-700 delay-200 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <Link
              to="/get-started"
              className="group px-8 py-4 bg-[#FF3D57] text-white text-lg font-bold rounded-full hover:bg-[#FF2D47] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Get free access
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
