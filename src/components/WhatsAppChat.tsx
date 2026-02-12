import { Link } from 'react-router-dom';

export default function WhatsAppChat() {
  return (
    <section id="scan-qc" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-6 py-2 bg-blue-50 border-2 border-blue-200 rounded-full text-blue-800 text-sm font-semibold mb-6">
              Scan quality check
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Effortless communication
            </h2>
            <p className="text-lg text-slate-700 mb-4">
              Instant updates via 3Shape Communicate or WhatsApp.<br />
              Problem solved in minutes!
            </p>
            <p className="text-base text-amber-600 font-semibold mb-6">
              We handle everything—you just receive updates
            </p>
            <Link
              to="/pricing"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#0073EA] to-[#FF69B4] text-white text-base font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Free and easy access
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-blue-200 via-sky-300 to-blue-300 p-1 rounded-xl">
              <img
                src="/screen_shot_2026-02-08_at_6.51.06_pm.png"
                alt="3Shape Communicate and WhatsApp communication interface"
                className="w-full max-w-4xl rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
