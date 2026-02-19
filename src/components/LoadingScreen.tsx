import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="flex space-x-4 mb-6">
        {[0, 150, 300].map((delay) => (
          <div
            key={delay}
            className="w-6 h-6 bg-white rounded-full animate-bounce"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
      <h1 className="text-white text-2xl font-semibold animate-pulse">
        Loading... Please wait
      </h1>
    </div>
  );
};

export default LoadingScreen;
