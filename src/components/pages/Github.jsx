import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github as GithubIcon, Star, GitFork, Users, Book } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { GITHUB_TOKEN } from '../../constants';

export function Github() {
  const [stats, setStats] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentTheme } = useTheme();

  const GITHUB_USERNAME = 'uttamribadiya16'; // Replace with your GitHub username

  useEffect(() => {
    const fetchData = async () => {
      try {      
        const headers = {
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        };

        // Fetch User Data
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers });
        const userData = await userRes.json();

        // Fetch Repositories
        const repoRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=5`,
          { headers }
        );
        const repoData = await repoRes.json();

        setStats([
          { icon: Book, label: 'Repositories', value: userData.public_repos },
          { icon: Star, label: 'Stars', value: repoData.reduce((sum, repo) => sum + repo.stargazers_count, 0) },
          { icon: GitFork, label: 'Forks', value: repoData.reduce((sum, repo) => sum + repo.forks_count, 0) },
          { icon: Users, label: 'Followers', value: userData.followers },
        ]);

        setRepositories(repoData.slice(0, 5));
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch GitHub data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

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
                <Icon
                style={{ 
                  color: currentTheme.colors.accent
                }}
                className="w-5 h-5" />
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
                <h3 
                style={{ 
                  color: currentTheme.colors.accent
                }}
                className="text-xl font-semibold mb-2">{repo.name}</h3>
                <p className="text-gray-300 mb-4">{repo.description || 'No description provided.'}</p>
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
                <span>{repo.stargazers_count}</span>
              </span>
              <span className="flex items-center space-x-1">
                <GitFork className="w-4 h-4" />
                <span>{repo.forks_count}</span>
              </span>
              <span>Updated on {new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
