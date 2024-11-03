import React from 'react';

export default function Skills() {
  const skills = {
    "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
    "Backend": ["Node.js", "Express", "Python", "Django", "GraphQL"],
    "Database": ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    "DevOps": ["Docker", "AWS", "CI/CD", "Git", "Linux"]
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Skills & Technologies</h2>
          <p className="mt-4 text-xl text-gray-500">Technologies I work with</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{category}</h3>
              <div className="space-y-2">
                {items.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center p-2 bg-purple-50 rounded-md text-purple-700"
                  >
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-2"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}