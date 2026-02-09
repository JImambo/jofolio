import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { blogPosts } from '../data/mock';

const Blog = () => {
  const handleReadMore = (slug) => {
    // Mock behavior - would navigate to blog post
    console.log('Navigate to blog post:', slug);
    alert(`Blog post "${slug}" would open here. This will be connected to backend later.`);
  };

  return (
    <section id="blog" className="py-20 bg-[#0f1419] relative">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Latest <span className="text-cyan-400">Articles</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights on web development, security, and modern technologies
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-[#1a1d29] rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-2"
            >
              {/* Post Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d29] to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyan-500/90 text-white text-xs font-medium">
                  {post.category}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <Button
                  onClick={() => handleReadMore(post.slug)}
                  variant="ghost"
                  className="text-cyan-400 hover:text-cyan-300 p-0 h-auto font-medium group/btn"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;