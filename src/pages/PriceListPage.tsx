import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PriceListPage() {
  const priceData = [
    { service: 'Crown/Bridge/Veneer/Onlay', rush24: '$25', rush6: '$45', rush1: '$60' },
    { service: 'Nightguard', rush24: '$20', rush6: '$35', rush1: '$45' },
    { service: 'Full Denture', rush24: '$65', rush6: '$85', rush1: '$100' },
    { service: 'Partial Denture', rush24: '$65', rush6: '$85', rush1: 'N/A' },
    { service: 'Shell Temporary', rush24: '$25', rush6: '$45', rush1: '$60' },
    { service: 'Wax Up', rush24: '$25', rush6: '$45', rush1: '$60' },
    { service: 'Model Only', rush24: '$8', rush6: '$15', rush1: '$25' },
    { service: 'Screw Retained Crown', rush24: '$45', rush6: '$65', rush1: '$80' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <SEO
        title="Price List - ToothLab.Ai | CAD Design Service Pricing"
        description="Detailed pricing for ToothLab.Ai CAD design services. Rush 24-hour, 6-hour, and 1-hour turnaround options. Transparent pricing for crowns, bridges, dentures, and more."
        keywords="dental lab price list, CAD design pricing, dental crown pricing, rush dental lab services, dental lab cost, dental design pricing"
        canonicalUrl="https://toothlab.ai/price-list"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0073EA] hover:text-[#0063DA] font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <div className="inline-block px-5 py-2 bg-gradient-to-r from-[#0073EA]/10 to-[#00CA72]/10 border-2 border-[#0073EA] rounded-full text-[#0073EA] text-sm font-bold mb-4">
              CAD Design Pricing
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              CAD Design Price List
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent pricing for CAD design services with flexible turnaround options
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#0073EA] to-[#00CA72]">
                  <th className="text-left py-4 px-6 text-white font-bold text-lg rounded-tl-2xl">
                    Service
                  </th>
                  <th className="text-center py-4 px-6 text-white font-bold text-lg">
                    24 Hours
                  </th>
                  <th className="text-center py-4 px-6 text-white font-bold text-lg">
                    6 Hours
                  </th>
                  <th className="text-center py-4 px-6 text-white font-bold text-lg rounded-tr-2xl">
                    1 Hour
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 transition-colors hover:bg-blue-50 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <td className="py-4 px-6 font-semibold text-gray-900">
                      {item.service}
                    </td>
                    <td className="py-4 px-6 text-center font-bold text-[#0073EA]">
                      {item.rush24}
                    </td>
                    <td className="py-4 px-6 text-center font-bold text-[#00CA72]">
                      {item.rush6}
                    </td>
                    <td className="py-4 px-6 text-center font-bold text-[#FF3D57]">
                      {item.rush1}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 space-y-6">
            <div className="bg-gradient-to-r from-[#0073EA]/10 to-[#00CA72]/10 border-2 border-[#0073EA] rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Additional Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• All prices are for CAD design services only</li>
                <li>• Volume discounts available for practices with high monthly volume</li>
                <li>• Some services may not be available for ultra-rush delivery</li>
                <li>• Contact us for custom quotes and special requirements</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/get-started"
              className="inline-block bg-gradient-to-r from-[#FF3D57] to-[#FDAB3D] text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Get free access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
