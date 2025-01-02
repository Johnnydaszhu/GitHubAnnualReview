'use client';
import React, { useState } from 'react';

const GitHubStats = () => {
  const [repoUrl, setRepoUrl] = useState('');
  const [stats, setStats] = useState(null);

  const fetchStats = async () => {
    // TODO: Implement API call to fetch stats
    console.log('Fetching stats for:', repoUrl);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">GitHub Repository Statistics</h1>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          placeholder="Enter GitHub repository URL"
          className="flex-1 p-2 rounded border border-border"
        />
        <button
          onClick={fetchStats}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-hover"
        >
          Get Stats
        </button>
      </div>

      {stats && (
        <div className="mt-4">
          {/* Stats display will go here */}
        </div>
      )}
    </div>
  )
}

export default GitHubStats;
