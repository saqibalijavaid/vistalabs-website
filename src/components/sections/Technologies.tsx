import React from 'react';
import {
  Code,
  Smartphone,
  Cloud,
  Cpu,
  Database,
  Workflow,
  Layers,
  Terminal,
  Command,
} from 'lucide-react';

// 1. Organize Tech Stack by Category for clarity
const techStack = [
  // Mobile & Frontend
  { name: 'React Native', icon: Smartphone, type: 'Mobile' },
  { name: 'Flutter', icon: Layers, type: 'Mobile' },
  { name: 'TypeScript', icon: Code, type: 'Web' },
  { name: 'Next.js', icon: Terminal, type: 'Web' },

  // AI & ML
  { name: 'OpenAI API', icon: Cpu, type: 'AI' },
  { name: 'PyTorch', icon: Database, type: 'AI' },
  { name: 'LangChain', icon: Workflow, type: 'AI' },
  { name: 'TensorFlow', icon: Cpu, type: 'AI' },

  // Backend & DevOps
  { name: 'Kubernetes', icon: Cloud, type: 'Infra' },
  { name: 'Docker', icon: Command, type: 'Infra' },
  { name: 'AWS Lambda', icon: Cloud, type: 'Infra' },
  { name: 'PostgreSQL', icon: Database, type: 'Data' },

  // Automation
  { name: 'n8n', icon: Workflow, type: 'Auto' },
  { name: 'Zapier', icon: Workflow, type: 'Auto' },
];

const Technologies: React.FC = () => {
  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden border-y border-gray-200 dark:border-gray-800 transition-colors duration-300">
      {/* 2. Graph/Network Background Effect 
          - Simple CSS grid pattern
          - Mask image creates the 'fade out' at edges
      */}
      <div className="absolute inset-0 z-0 opacity-[0.1] dark:opacity-[0.1] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px),
                               linear-gradient(to bottom, #808080 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Side Gradients to soften the marquee edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-base font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
          Tech Stack
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl font-sans">
          Engineered for Modern Scale
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto font-mono text-sm">
          // We orchestrate complex AI & Mobile workflows using the latest open-source standards.
        </p>
      </div>

      {/* 3. The Infinite Scroll Container */}
      <div className="relative flex flex-col gap-8">
        {/* Row 1: Moves Left */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-infinite-scroll group-hover:paused gap-8 px-4">
            {/* We duplicate the list to ensure seamless looping */}
            {[...techStack, ...techStack].map((tech, index) => (
              <TechBadge key={`${tech.name}-${index}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 2: Moves Right (Optional Reverse) or Slower */}
        {/* For simplicity, we just do one main row, or duplicate with different speed if desired. 
            Here is a trick: We reverse the array to make it look different. */}
        <div className="flex overflow-hidden group">
          <div
            className="flex animate-infinite-scroll group-hover:paused gap-8 px-4"
            style={{ animationDirection: 'reverse' }}
          >
            {[...techStack]
              .reverse()
              .concat([...techStack].reverse())
              .map((tech, index) => (
                <TechBadge key={`rev-${tech.name}-${index}`} tech={tech} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Reusable Tech Badge Component (Updated for Light Mode Visibility)
const TechBadge: React.FC<{ tech: (typeof techStack)[0] }> = ({ tech }) => (
  <div
    className="
    flex items-center space-x-2 
    px-6 py-3 rounded-full 
    whitespace-nowrap cursor-default transition-all duration-300
    
    /* LIGHT MODE STYLING (The Fix) */
    bg-white 
    border border-gray-200                   /* Stronger border definition */
    shadow-[0_2px_8px_rgba(0,0,0,0.04)]      /* Soft, distinct elevation */
    hover:border-blue-500 
    hover:shadow-blue-100                    /* Colored glow on hover */

    /* DARK MODE STYLING (Preserved) */
    dark:bg-gray-800 
    dark:border-gray-700 
    dark:hover:border-blue-400 
    dark:shadow-none
  "
  >
    <tech.icon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 font-mono">
      {tech.name}
    </span>
  </div>
);

export default Technologies;
