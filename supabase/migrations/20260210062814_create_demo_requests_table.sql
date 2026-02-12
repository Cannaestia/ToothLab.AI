/*
  # Create demo requests table

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `clinic_name` (text) - Name of the dental clinic
      - `contact_name` (text) - Name of the person submitting the form
      - `email` (text) - Contact email address
      - `phone` (text, optional) - Contact phone number
      - `monthly_volume` (text) - Selected monthly case volume range
      - `message` (text, optional) - Additional notes from the submitter
      - `created_at` (timestamptz) - Timestamp when the form was submitted

  2. Security
    - Enable RLS on `demo_requests` table
    - Add policy to allow anyone to insert demo requests (public form)
    - No select/update/delete policies (data is write-only for security)

  3. Notes
    - This table stores form submissions from the "Start free trial" form
    - Data can be viewed and managed through the Supabase dashboard
    - Email field is not unique to allow multiple submissions from same email if needed
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  clinic_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text,
  monthly_volume text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit demo requests"
  ON demo_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);
