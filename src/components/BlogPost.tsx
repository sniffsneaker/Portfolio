import React from 'react';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

interface BlogPostProps {
  id: number;
  onBack: () => void;
}

export default function BlogPost({ id, onBack }: BlogPostProps) {
  const post = {
    1: {
      title: "Building Scalable Web Applications with React and TypeScript",
      content: `
        Building scalable web applications requires careful planning and the right tools. In this comprehensive guide, we'll explore how to leverage React and TypeScript to create maintainable, type-safe applications that can grow with your needs.

        ## Why TypeScript?

        TypeScript adds static typing to JavaScript, helping catch errors early in development and improving code maintainability. Some key benefits include:

        - Early error detection
        - Better IDE support
        - Improved code documentation
        - Enhanced refactoring capabilities

        ## Best Practices

        1. **Component Organization**
           - Keep components small and focused
           - Use proper file structure
           - Implement proper typing for props

        2. **State Management**
           - Choose appropriate state management solutions
           - Implement proper typing for state
           - Use context API effectively

        3. **Performance Optimization**
           - Implement code splitting
           - Use proper memoization
           - Optimize renders
      `,
      date: "2024-03-15",
      readTime: "8 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
      author: "John Doe"
    },
    2: {
      title: "The Future of Web Development: What's Coming in 2024",
      content: `
        The web development landscape is constantly evolving. Let's explore the upcoming trends and technologies that will shape the future of web development in 2024.

        ## Emerging Technologies

        1. **Web Assembly**
           - Improved performance
           - Better browser support
           - New use cases

        2. **Edge Computing**
           - Faster response times
           - Reduced server load
           - Better user experience

        3. **AI Integration**
           - Smarter applications
           - Automated testing
           - Enhanced user experiences
      `,
      date: "2024-03-10",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
      author: "John Doe"
    },
    3: {
      title: "Mastering CSS Grid: A Complete Guide",
      content: `
        CSS Grid has revolutionized web layout. In this comprehensive guide, we'll explore everything you need to know about CSS Grid.

        ## Fundamentals

        1. **Grid Container**
           - Setting up the grid
           - Defining columns and rows
           - Managing gaps

        2. **Grid Items**
           - Placement strategies
           - Spanning cells
           - Alignment options

        3. **Responsive Design**
           - Using minmax()
           - Auto-fit and auto-fill
           - Grid areas
      `,
      date: "2024-03-05",
      readTime: "10 min read",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=1000",
      author: "John Doe"
    }
  }[id];

  if (!post) return null;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <button
        onClick={onBack}
        className="flex items-center text-purple-600 hover:text-purple-700 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Blog
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              {post.category}
            </span>
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
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="prose prose-purple max-w-none">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
                  alt={post.author}
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}