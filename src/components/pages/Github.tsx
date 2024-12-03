import React from 'react';
import { motion } from 'framer-motion';
import { Github as GithubIcon, Star, GitFork, Users, Book } from 'lucide-react';

export function Github() {
  const repositories = [
    {
      name: 'awesome-project',
      description: 'A collection of awesome things.',
      language: 'TypeScript',
      stars: 128,
      forks: 45,
      updated: '2024-03-15'
    },
    {
      name: 'react-components',
      description: 'A set of reusable React components.',
      language: 'JavaScript',
      stars: 89,
      forks: 23,
      updated: '2024-03-10'
    },
    {
      name: 'utils-library',
      description: 'Common utility functions for JavaScript projects.',
      language: 'JavaScript',
      stars: 67,
      forks: 12,
      updated: '2024-03-05'
    }
  ];

  const stats = [
    { icon: Book, label: 'Repositories', value: '25' },
    { icon: Star, label: 'Stars', value: '284' },
    { icon: GitFork, label: 'Forks', value: '80' },
    { icon: Users, label: 'Followers', value: '156' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-8 px-4"
    >
      <div className="flex items-center space-x-4 mb-8">
        <GithubIcon className="w-10 h-10 text-white" />
        <h1 className="text-3xl font-bold text-white">GitHub Profile</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#2d2d2d] p-4 rounded-lg"
            >
              <div className="flex items-center space-x-2 mb-2">
                <Icon className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">{stat.label}</span>
              </div>
              <span className="text-2xl font-bold text-white">{stat.value}</span>
            </motion.div>
          );
        })}
      </div>

      <div className="space-y-4">
        {repositories.map((repo, index) => (
          <motion.div
            key={repo.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#2d2d2d] p-6 rounded-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{repo.name}</h3>
                <p className="text-gray-300 mb-4">{repo.description}</p>
              </div>
              <button className="px-3 py-1 text-sm border border-gray-600 rounded-md hover:bg-[#363636] transition-colors">
                Star
              </button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center space-x-1">
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span>{repo.language}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Star className="w-4 h-4" />
                <span>{repo.stars}</span>
              </span>
              <span className="flex items-center space-x-1">
                <GitFork className="w-4 h-4" />
                <span>{repo.forks}</span>
              </span>
              <span>Updated on {repo.updated}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}