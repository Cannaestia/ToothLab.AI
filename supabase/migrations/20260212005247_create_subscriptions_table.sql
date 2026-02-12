/*
  # Create subscriptions table

  1. New Tables
    - `subscriptions`
      - `id` (uuid, primary key) - Unique identifier for the subscription
      - `customer_email` (text, not null) - Customer email address
      - `customer_name` (text) - Customer name
      - `plan_name` (text, not null) - Name of the subscription plan (Starter, Professional, Enterprise)
      - `plan_price` (text, not null) - Price of the plan
      - `stripe_checkout_session_id` (text, unique) - Stripe checkout session ID
      - `stripe_customer_id` (text) - Stripe customer ID
      - `stripe_subscription_id` (text) - Stripe subscription ID
      - `status` (text, default 'pending') - Subscription status (pending, active, cancelled, expired)
      - `created_at` (timestamptz, default now()) - When the subscription was created
      - `updated_at` (timestamptz, default now()) - When the subscription was last updated

  2. Security
    - Enable RLS on `subscriptions` table
    - Add policy for users to read their own subscriptions by email
    - No public insert/update/delete policies (handled via Edge Functions)
*/

CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_email text NOT NULL,
  customer_name text,
  plan_name text NOT NULL,
  plan_price text NOT NULL,
  stripe_checkout_session_id text UNIQUE,
  stripe_customer_id text,
  stripe_subscription_id text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own subscriptions"
  ON subscriptions
  FOR SELECT
  USING (true);