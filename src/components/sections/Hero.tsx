import React from 'react';
import Button from '../common/Button';
import { Terminal } from 'lucide-react';
import HeroPattern from './HeroPattern'; // Import the new component

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-10 pb-20 transition-colors duration-300">
      {/* --- BACKGROUND LAYERS --- */}

      {/* 1. Global Ambient Glow (Keep your original subtle blobs if desired, or remove them) */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      {/* 2. THE NEW PATTERN COMPONENT */}
      <HeroPattern />

      {/* --- CONTENT LAYER --- */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full min-h-[70vh] z-10">
        {/* ... Your existing content (Badge, Headlines, Buttons) ... */}

        <div className="flex items-center space-x-2 mb-8 animate-fade-in-up">
          <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
            <Terminal className="text-orange-600 dark:text-orange-400 w-6 h-6" />
          </div>
          <span className="font-mono text-sm font-bold text-orange-600 dark:text-orange-400 tracking-wider uppercase">
            VistaLabs 2025
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-gray-900 dark:text-white tracking-tighter leading-[0.9] mb-8">
          Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            The Future.
          </span>
        </h1>

        <div className="max-w-2xl mb-10">
          <p className="font-mono text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
            // We architect scalable cloud infrastructure and high-performance software for the next
            generation of startups.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button label="Start Building" variant="primary" />
          <Button label="Read Documentation" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
