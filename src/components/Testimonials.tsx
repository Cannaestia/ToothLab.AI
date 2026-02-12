import { Quote, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The instant QC feedback has revolutionized how we handle scans. We're catching issues immediately, not days later. Our patients appreciate the efficiency, and we've eliminated nearly all remakes.",
      author: "Dr. Elaine Bylis",
      title: "Restorative Dentist",
      location: "Baltimore, MD",
      rating: 5
    },
    {
      quote: "I was skeptical at first, but the quality speaks for itself. The crowns and bridges we receive are consistently excellent. My chair time has decreased significantly, and patient satisfaction is at an all-time high.",
      author: "Dr. Jeff Blank",
      title: "General Dentist",
      location: "Beaufort, SC",
      rating: 5
    },
    {
      quote: "ToothLab.ai's technology integration is seamless. The CAD designs are precise, and the turnaround is faster than any lab I've worked with. This has transformed our practice efficiency.",
      author: "Dr. Roger Gilbert",
      title: "Cosmetic Dentist",
      location: "Loma Linda, CA",
      rating: 5
    },
    {
      quote: "The level of precision in their work is remarkable. Every case comes back exactly as planned. The communication is clear, and the support team is always responsive. Highly recommend.",
      author: "Dr. Jong S. Lim",
      title: "General Dentist",
      location: "Elmhurst, NY",
      rating: 5
    },
    {
      quote: "We've been using ToothLab for six months now, and the consistency is outstanding. The quality control catches things we used to miss, saving us time and money. Our patients are thrilled with the results.",
      author: "Dr. Paul Bylis",
      title: "Owner, Family Dental Care",
      location: "Glenburnie, MD",
      rating: 5
    },
    {
      quote: "The turnaround time is incredible without sacrificing quality. We can now deliver restorations faster, and the fit is perfect every single time. This is the future of dental lab work.",
      author: "Dr. Ross Nash",
      title: "Cosmetic Dentist",
      location: "Charlotte, NC",
      rating: 5
    },
    {
      quote: "ToothLab.ai has elevated our practice to a new level. The AI-powered QC is brilliant—it catches marginal discrepancies before they become problems. Our remake rate is virtually zero now.",
      author: "Dr. M. Patel",
      title: "Implant & Cosmetic Specialist",
      location: "Atlanta, GA",
      rating: 5
    },
    {
      quote: "The real-time scan verification has been a game-changer for our practice. We're able to catch issues immediately and deliver superior results to our patients. The technology is simply outstanding.",
      author: "Dr. Les Rykiss",
      title: "General Dentist",
      location: "Ontario, Canada",
      rating: 5
    },
    {
      quote: "As a practice that values innovation, ToothLab.ai has exceeded our expectations. The precision and consistency of the restorations is remarkable, and the turnaround times have significantly improved our workflow.",
      author: "Dr. Steven Lim",
      title: "Cosmetic Dentist",
      location: "Vancouver, Canada",
      rating: 5
    },
    {
      quote: "From a lab perspective, ToothLab.ai's technology has revolutionized our operations. The quality control and design precision have allowed us to scale efficiently while maintaining the highest standards our clients expect.",
      author: "Mr. Ted Mattingley",
      title: "Lab CEO",
      location: "Louisville, KY",
      rating: 5
    },
    {
      quote: "We've integrated ToothLab.ai into our lab workflow, and the results speak for themselves. Fewer remakes, happier clients, and more efficient production. This technology is the future of dental lab services.",
      author: "Mr. Scot Armstrong",
      title: "Lab CEO",
      location: "Memphis, TN",
      rating: 5
    }
  ];

  const firstColumnTestimonials = testimonials.slice(0, 6);
  const secondColumnTestimonials = testimonials.slice(6, 11);

  const duplicatedFirstColumn = [...firstColumnTestimonials, ...firstColumnTestimonials, ...firstColumnTestimonials];
  const duplicatedSecondColumn = [...secondColumnTestimonials, ...secondColumnTestimonials, ...secondColumnTestimonials];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="lg:w-[30%] bg-gradient-to-br from-blue-50 via-blue-25 to-white rounded-2xl p-5 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Dental practices <span className="bg-gradient-to-r from-[#FF3D57] to-[#FDAB3D] bg-clip-text text-transparent">love us</span>
            </h2>

            <p className="text-gray-700 text-base mb-8 leading-relaxed">
              Pioneering seamless workflow automation that transforms your dental operations
            </p>

            <Link
              to="/get-started"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#FF3D57] to-[#FDAB3D] text-white text-base font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start for free
            </Link>
          </div>

          <div className="lg:w-[70%] relative h-[600px] overflow-hidden rounded-3xl bg-gradient-to-b from-blue-50 to-white">
            <div className="grid grid-cols-2 gap-3 h-full">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col gap-3 p-2 animate-scroll-down">
                  {duplicatedFirstColumn.map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 flex-shrink-0"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <Quote className="text-[#0073EA]" size={24} />
                        <div className="flex gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="text-[#FDAB3D] fill-[#FDAB3D]" size={12} />
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-700 text-xs mb-3 leading-relaxed italic line-clamp-4">
                        "{testimonial.quote}"
                      </p>

                      <div className="border-t border-gray-200 pt-3">
                        <p className="font-bold text-gray-900 text-xs">
                          {testimonial.author}
                        </p>
                        <p className="text-[10px] text-gray-600">
                          {testimonial.title}
                        </p>
                        <p className="text-[10px] text-gray-500">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col gap-3 p-2 animate-scroll-up">
                  {duplicatedSecondColumn.map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 flex-shrink-0"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <Quote className="text-[#0073EA]" size={24} />
                        <div className="flex gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="text-[#FDAB3D] fill-[#FDAB3D]" size={12} />
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-700 text-xs mb-3 leading-relaxed italic line-clamp-4">
                        "{testimonial.quote}"
                      </p>

                      <div className="border-t border-gray-200 pt-3">
                        <p className="font-bold text-gray-900 text-xs">
                          {testimonial.author}
                        </p>
                        <p className="text-[10px] text-gray-600">
                          {testimonial.title}
                        </p>
                        <p className="text-[10px] text-gray-500">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-blue-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-up {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-scroll-down {
          animation: scroll-down 30s linear infinite;
        }

        .animate-scroll-up {
          animation: scroll-up 30s linear infinite;
        }

        .animate-scroll-down:hover,
        .animate-scroll-up:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
