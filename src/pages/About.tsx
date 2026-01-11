import React from 'react';
import Button from '../components/common/Button';
import { Target, Zap, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      
      {/* 1. HERO SECTION: CENTERED (Matches Services Page) */}
      <div className="relative pt-20 pb-20 border-b border-gray-100 dark:border-gray-800">
        {/* ADDED: text-center to the main container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase mb-4 block">
            About VistaLabs
          </span>
          
          {/* ADDED: mx-auto to center the text block width */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-8 leading-tight max-w-5xl mx-auto">
            We don't just write code. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              We engineer intelligence.
            </span>
          </h1>
          
          {/* ADDED: mx-auto to center the paragraph */}
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            VistaLabs was founded on a simple premise: The future belongs to those who automate. We help ambitious startups and enterprises transition from legacy software to AI-driven ecosystems.
          </p>
          
        </div>
      </div>

      {/* 2. OUR DNA (Values Grid) */}
      <div className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Value 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Zap className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Velocity First</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                In the AI era, speed is survival. We deploy functional prototypes in days, not months, using cutting-edge rapid development frameworks.
              </p>
            </div>

            {/* Value 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Target className="text-purple-600 dark:text-purple-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Precision Engineering</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We despise "spaghetti code." Every system we architect is built for massive scale, rigorous security, and long-term maintainability.
              </p>
            </div>

            {/* Value 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Users className="text-green-600 dark:text-green-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Client Obsession</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We don't act like a vendor; we act like your CTO. We challenge your assumptions, refine your strategy, and own the outcome.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 3. THE "BY THE NUMBERS" SECTION */}
      <div className="py-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">3+</div>
              <div className="text-sm font-mono text-gray-500 uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">50+</div>
              <div className="text-sm font-mono text-gray-500 uppercase tracking-wider">Projects Shipped</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">12</div>
              <div className="text-sm font-mono text-gray-500 uppercase tracking-wider">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">24/7</div>
              <div className="text-sm font-mono text-gray-500 uppercase tracking-wider">Support Coverage</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. GLOBAL PRESENCE / BOTTOM CTA */}
      <div className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <div className="flex items-center space-x-2 mb-6 text-blue-400">
              <Globe className="w-6 h-6" />
              <span className="font-mono uppercase tracking-widest">Global Reach</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Building from Silicon Valley standards, for the world.</h2>
            <p className="text-gray-400 text-lg mb-8">
              Whether you're in New York, London, or Singapore, our distributed team aligns with your timezone to deliver excellence without borders.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button label="Work With Us" variant="primary" />
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
             <div className="p-8 border border-gray-700 rounded-2xl bg-gray-800/50 backdrop-blur-sm max-w-sm">
                <p className="font-mono text-green-400 text-sm mb-4">root@vistalabs:~$ status</p>
                <div className="space-y-2 text-gray-300 font-mono text-sm">
                  <p>✓ AI Systems: <span className="text-green-400">Online</span></p>
                  <p>✓ Team Availability: <span className="text-green-400">High</span></p>
                  <p>✓ Next Project: <span className="animate-pulse text-blue-400">Loading...</span></p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-xs text-gray-500">System Ready for deployment.</p>
                </div>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;