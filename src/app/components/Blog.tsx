import { Calendar, User, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { BlogDetail } from './BlogDetail';
import { blogArticles, BlogArticle } from '../data/blogArticles';

export function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  // If an article is selected, show the detail view
  if (selectedArticle) {
    return (
      <BlogDetail
        article={selectedArticle}
        onBack={() => setSelectedArticle(null)}
      />
    );
  }

  return (
    <section className="py-20 bg-white" id="blog">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-[#A8C69F] mb-4">Resources & Insights</h2>
          <p className="text-xl text-[#5A4A3A] max-w-3xl mx-auto">
            Educational articles, parenting tips, and insights from our Montessori experts
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16 bg-gradient-to-br from-[#F5F1E8] to-[#FFF8E7] rounded-3xl overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow"
          onClick={() => setSelectedArticle(blogArticles[0])}>
          <div className="grid md:grid-cols-2">
            <ImageWithFallback
              src={blogArticles[0].image}
              alt={blogArticles[0].title}
              className="w-full h-full min-h-[400px] object-cover"
            />
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block px-4 py-1 bg-[#A8C69F] text-white rounded-full text-sm w-fit mb-4">
                Featured
              </span>
              <h3 className="text-3xl md:text-4xl text-[#5A4A3A] mb-4">
                {blogArticles[0].title}
              </h3>
              <p className="text-[#8B7355] mb-6 leading-relaxed">
                {blogArticles[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-[#8B7355] mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blogArticles[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogArticles[0].date}</span>
                </div>
              </div>
              <button className="bg-[#FF6B9D] hover:bg-[#FF4C85] text-white px-6 py-3 rounded-full transition-colors w-fit flex items-center gap-2">
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles.slice(1).map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-gradient-to-br from-[#F5F1E8] to-[#FFF8E7] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#A8C69F]/20 text-[#5A4A3A] rounded-full text-sm mb-3">
                  {article.category}
                </span>
                <h3 className="text-xl text-[#5A4A3A] mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-[#8B7355] mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[#8B7355] mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span className="text-xs">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span className="text-xs">{article.date}</span>
                  </div>
                </div>
                <button className="text-[#FF6B9D] hover:text-[#FF4C85] transition-colors flex items-center gap-2">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-[#5A4A3A] mb-6">
            Want to stay updated with our latest articles and news?
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border-2 border-[#E5DCC8] focus:border-[#A8C69F] focus:outline-none"
            />
            <button className="bg-[#FF6B9D] hover:bg-[#FF4C85] text-white px-8 py-3 rounded-full transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}