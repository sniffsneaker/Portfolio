import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  // Get the hash from URL when component mounts
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#blog/')) {
      const id = parseInt(hash.split('/')[1]);
      if (!isNaN(id)) {
        setSelectedBlogId(id);
      }
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#blog/')) {
        const id = parseInt(hash.split('/')[1]);
        if (!isNaN(id)) {
          setSelectedBlogId(id);
        }
      } else {
        setSelectedBlogId(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {selectedBlogId ? (
          <BlogPost 
            id={selectedBlogId} 
            onBack={() => {
              window.location.hash = '#blog';
              setSelectedBlogId(null);
            }} 
          />
        ) : (
          <>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Blog />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;