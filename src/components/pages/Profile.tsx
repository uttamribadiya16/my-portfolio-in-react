import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Profile() {
  return (
    <div className="max-w-3xl space-y-8">
      <div className="flex items-center space-x-6">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold text-white">John Doe</h1>
          <p className="text-xl text-gray-400">Full Stack Developer</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            Passionate full-stack developer with expertise in modern web technologies.
            Focused on creating efficient, scalable, and user-friendly applications.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'Docker'].map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-[#2d2d2d] rounded-full text-blue-400">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}