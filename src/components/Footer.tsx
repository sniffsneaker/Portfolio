import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="mailto:john.doe@example.com" className="hover:text-purple-400">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}