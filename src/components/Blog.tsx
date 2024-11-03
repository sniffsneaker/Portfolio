import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export default function Blog() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable Web Applications with React and TypeScript",
      excerpt: "Learn how to create maintainable and type-safe React applications using TypeScript and modern best practices.",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 2,
      title: "The Future of Web Development: What's Coming in 2024",
      excerpt: "Explore upcoming trends and technologies that will shape the future of web development.",
      date: "2024-03-10",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 3,
      title: "Mastering CSS Grid: A Complete Guide",
      excerpt: "Deep dive into CSS Grid layout system and learn how to create complex layouts with ease.",
      date: "2024-03-05",
      readTime: "10 min read",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Latest Blog Posts</h2>
          <p className="mt-4 text-xl text-gray-500">Thoughts, tutorials, and insights about web development</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-gray-900 line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-500 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4">
                  <a
                    href={`#blog/${post.id}`}
                    className="inline-flex items-center text-purple-600 hover:text-purple-700"
                  >
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#blog/all"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
          >
            View All Posts
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}