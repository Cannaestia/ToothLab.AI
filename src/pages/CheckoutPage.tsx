import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CreditCard, Loader2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CheckoutPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const planName = searchParams.get('plan') || 'Starter';
  const planPrice = searchParams.get('price') || '$449';

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout-session`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            planName,
            planPrice,
            customerEmail: email,
            customerName: name,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Your Subscription
            </h1>
            <p className="text-xl text-gray-600">
              Start your journey with ToothLab AI
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Summary</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold text-gray-900">{planName} Plan</p>
                  <p className="text-sm text-gray-600">Monthly subscription</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">{planPrice}</p>
                  <p className="text-sm text-gray-600">per month</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleCheckout}>
              <div className="space-y-6 mb-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0073EA] focus:border-transparent"
                    placeholder="Dr. John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0073EA] focus:border-transparent"
                    placeholder="dr.smith@example.com"
                  />
                </div>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 bg-gradient-to-r from-[#0073EA] to-[#00CA72] text-white rounded-full text-lg font-bold hover:scale-105 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Proceed to Payment
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                You will be redirected to Stripe's secure checkout page to complete your payment.
              </p>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <button
                onClick={() => navigate('/pricing')}
                className="text-[#0073EA] hover:underline text-sm font-semibold"
              >
                ← Back to Pricing
              </button>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-bold text-gray-900 mb-2">What happens next?</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• You'll be redirected to Stripe's secure payment page</li>
              <li>• Enter your card details to complete the subscription</li>
              <li>• Receive instant access to ToothLab AI platform</li>
              <li>• Start uploading scans immediately</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
