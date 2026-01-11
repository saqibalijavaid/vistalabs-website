import React from 'react';
import Button from '../components/common/Button';
import { 
  Bot,              // GenAI
  Workflow,         // Automation
  BrainCircuit,     // ML/DL (requires lucide-react update) or Cpu
  CloudLightning,   // Cloud
  Code,             // Custom Dev
  Smartphone,       // Mobile
  Monitor,          // Web/Desktop
  Database          // Data
} from 'lucide-react';

const servicesList = [
  // --- TIER 1: THE FUTURE (AI & AUTOMATION) ---
  {
    title: 'Generative AI & RAG',
    desc: 'Custom LLMs and Retrieval-Augmented Generation (RAG) systems that chat with your proprietary data to provide accurate, context-aware answers.',
    icon: Bot,
  },
  {
    title: 'Intelligent Automation',
    desc: 'End-to-end agentic workflows. We replace manual repetitive tasks with smart AI agents that handle operations, support, and data entry 24/7.',
    icon: Workflow,
  },
  {
    title: 'Machine Learning & DL',
    desc: 'Predictive modeling, computer vision, and deep learning algorithms designed to solve complex analytical problems and forecast trends.',
    icon: BrainCircuit, // If BrainCircuit doesn't render, switch to Cpu
  },

  // --- TIER 2: INFRASTRUCTURE ---
  {
    title: 'Cloud & MLOps',
    desc: 'Scalable cloud architecture (AWS/Azure/GCP) optimized for high-performance AI model serving, ensuring zero downtime and cost efficiency.',
    icon: CloudLightning,
  },

  // --- TIER 3: CORE ENGINEERING ---
  {
    title: 'Mobile App Development',
    desc: 'High-performance native and cross-platform apps (React Native, Flutter) for iOS and Android that deliver seamless mobile experiences.',
    icon: Smartphone,
  },
  {
    title: 'Full-Stack Web & Desktop',
    desc: 'Modern, responsive web applications (Next.js, React) and robust desktop software built for speed, security, and massive scale.',
    icon: Monitor,
  },
  {
    title: 'Custom Software Engineering',
    desc: 'Tailor-made backend systems and APIs designed specifically to address your unique business logic and architectural challenges.',
    icon: Code,
  },
  {
    title: 'Data Analytics & Engineering',
    desc: 'Turning raw data into actionable intelligence. We build the pipelines and visualization dashboards that drive decision-making.',
    icon: Database,
  },
];

const Services: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">
            Our Capabilities
          </h2>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Complete Digital Transformation
          </h1>
          <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            From foundational software engineering to cutting-edge autonomous AI agents, we build the entire technology stack required for the modern enterprise.
          </p>
        </div>

        {/* Services Grid 
            Updated to 3 columns on large screens for better density 
        */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="group flex flex-col p-8 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-blue-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed">
                {service.desc}
              </p>
              <div>
                <Button label="Learn More" variant="secondary" />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Services;