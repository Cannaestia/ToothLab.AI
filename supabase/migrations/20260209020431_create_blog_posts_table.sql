/*
  # Create blog posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key) - Unique identifier for each blog post
      - `title` (text) - Blog post title
      - `slug` (text, unique) - URL-friendly version of title
      - `excerpt` (text) - Short summary for listing pages
      - `content` (text) - Full blog post content (markdown supported)
      - `author` (text) - Author name
      - `featured_image` (text) - URL to featured image
      - `published` (boolean) - Whether post is published or draft
      - `published_at` (timestamptz) - When the post was published
      - `created_at` (timestamptz) - When record was created
      - `updated_at` (timestamptz) - When record was last updated
      - `category` (text) - Blog category (e.g., "Case Studies", "Industry Tips", "Product Updates")
      - `tags` (text[]) - Array of tags for filtering

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for anyone to read published blog posts
    - Published posts are publicly accessible for SEO and visitor engagement

  3. Indexes
    - Index on slug for fast lookups
    - Index on published_at for sorting
    - Index on category for filtering
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL DEFAULT 'ToothLab Team',
  featured_image text,
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  category text,
  tags text[] DEFAULT '{}'::text[]
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  USING (published = true);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);