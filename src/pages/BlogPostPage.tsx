import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  featured_image: string | null;
  published_at: string;
  category: string | null;
  tags: string[];
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="pt-32 pb-20 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-slate-200 border-t-[#00CA72]"></div>
          <p className="mt-4 text-slate-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
          <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00CA72] text-white font-medium rounded-full hover:bg-[#00b365] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#00CA72] hover:text-[#00b365] font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {post.category && (
            <span className="inline-block px-4 py-2 bg-[#00CA72]/10 text-[#00CA72] text-sm font-medium rounded-full mb-6">
              {post.category}
            </span>
          )}

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{formatDate(post.published_at)}</span>
            </div>
          </div>

          {post.featured_image && (
            <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-xl">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg prose-slate max-w-none mb-12">
            <div className="whitespace-pre-wrap text-slate-700 leading-relaxed">
              {post.content}
            </div>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="pt-8 border-t border-slate-200">
              <div className="flex items-center gap-3 flex-wrap">
                <Tag className="w-5 h-5 text-slate-400" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <div className="bg-gradient-to-br from-slate-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Transform Your Dental Practice?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Discover how ToothLab can help you deliver better outcomes
          </p>
          <Link
            to="/get-started"
            className="inline-block px-8 py-4 bg-[#00CA72] text-white font-bold rounded-full hover:bg-[#00b365] transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
