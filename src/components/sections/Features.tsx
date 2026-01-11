import React from 'react';
import { Zap, Shield, TrendingUp, Cpu, Globe, Users } from 'lucide-react'; // Import specific icons

// 1. Define the interface for a Feature
interface FeatureItem {
  name: string;
  description: string;
  icon: React.ElementType; // This allows us to pass the icon component itself
}

// 2. The Data: Easy to edit later without touching HTML
const features: FeatureItem[] = [
  {
    name: 'Lightning Fast',
    description: 'Our specialized compiler infrastructure reduces build times by up to 40% for large scale apps.',
    icon: Zap,
  },
  {
    name: 'Bank-Grade Security',
    description: 'Enterprise-ready security protocols standard on all deployments, keeping your IP safe.',
    icon: Shield,
  },
  {
    name: 'Scalable Architecture',
    description: 'Built to handle millions of requests from day one without needing a complete rewrite.',
    icon: TrendingUp,
  },
  {
    name: 'Global Edge Network',
    description: 'Content delivery from 200+ edge locations ensures low latency worldwide.',
    icon: Globe,
  },
  {
    name: 'AI Integration',
    description: 'Native support for LLM orchestration and vector database management.',
    icon: Cpu,
  },
  {
    name: 'Expert Support',
    description: '24/7 dedicated support from engineers who actually wrote the code.',
    icon: Users,
  },
];

const Features: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            Capabilities
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            A better way to build
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            Everything you need to launch your next big idea, pre-configured and ready for production.
          </p>
        </div>

        {/* The Grid */}
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                {/* Icon Container */}
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    {feature.name}
                  </p>
                </dt>
                {/* Description */}
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        
      </div>
    </div>
  );
};

export default Features;