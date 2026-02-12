export default function CTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#0073EA] to-[#00CA72] rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Get free access to SEAZONA worktickets!!!
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Try ToothLab.Ai now to get not 2000 but 26 free Seazona worktickets =)
          </p>
          <div className="flex justify-center">
            <a
              href="/get-started"
              className="px-10 py-4 bg-white text-[#0073EA] text-lg font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start my free trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
