/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text) - Contact's full name
      - `email` (text) - Contact's email address
      - `phone` (text, optional) - Contact's phone number
      - `subject` (text) - Message subject
      - `message` (text) - Message content
      - `created_at` (timestamptz) - When the message was submitted
      
  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for anonymous users to insert messages
    - Add policy for authenticated users to read all messages (for admin access)
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);