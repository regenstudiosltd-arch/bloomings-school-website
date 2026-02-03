import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface BlogDetailProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    author: string;
    date: string;
    category: string;
  };
  onBack: () => void;
}

export function BlogDetail({ article, onBack }: BlogDetailProps) {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#5A4A3A] hover:text-[#A8C69F] mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Resources</span>
        </button>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-[#A8C69F] text-white rounded-full text-sm mb-4">
            {article.category}
          </span>
          <h1 className="text-4xl md:text-5xl text-[#5A4A3A] mb-6">
            {article.title}
          </h1>
          
          {/* Meta Info */}
          <div className="flex items-center gap-6 text-[#8B7355] mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{article.date}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-8">
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-[#8B7355] leading-relaxed mb-8 font-medium">
              {article.excerpt}
            </div>
            
            <div className="text-[#5A4A3A] leading-relaxed space-y-6">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-[#E5DCC8]">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h3 className="text-xl text-[#5A4A3A]">Share this article</h3>
              <div className="flex items-center gap-4">
                <button className="p-3 bg-[#1877F2] text-white rounded-full hover:opacity-90 transition-opacity">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="p-3 bg-[#1DA1F2] text-white rounded-full hover:opacity-90 transition-opacity">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="p-3 bg-[#0A66C2] text-white rounded-full hover:opacity-90 transition-opacity">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-8 bg-gradient-to-br from-[#F5F1E8] to-[#FFF8E7] rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[#A8C69F] rounded-full flex items-center justify-center text-white text-2xl">
                {article.author.charAt(0)}
              </div>
              <div>
                <h4 className="text-xl text-[#5A4A3A] mb-2">About {article.author}</h4>
                <p className="text-[#8B7355]">
                  An experienced educator and Montessori specialist dedicated to helping children 
                  reach their full potential through innovative teaching methods and holistic education.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Blog Button */}
          <div className="mt-12 text-center">
            <Button
              onClick={onBack}
              className="bg-[#FF6B9D] hover:bg-[#FF4C85] text-white px-8 py-3 rounded-full"
            >
              Back to All Articles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
