import React from 'react';
import { Code2, Rocket, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Passionate about creating innovative solutions and delivering exceptional user experiences.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-purple-600 rounded-md shadow-lg">
                      <Code2 className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Clean Code</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Writing maintainable, scalable, and efficient code is my top priority.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-purple-600 rounded-md shadow-lg">
                      <Users className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Team Player</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Excellent communication and collaboration skills in diverse team environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-purple-600 rounded-md shadow-lg">
                      <Rocket className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Fast Learner</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Quick to adapt to new technologies and methodologies in the ever-evolving tech landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}