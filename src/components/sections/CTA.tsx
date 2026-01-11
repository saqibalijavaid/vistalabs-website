import React from 'react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <div className="bg-blue-600 dark:bg-blue-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to scale your business?</span>
          <span className="block text-blue-200">Start your free consultation today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-blue-100">
          Join the hundreds of startups that trust VistaLabs to power their digital infrastructure.
        </p>
        <div className="mt-8 flex justify-center gap-4">
            {/* We wrap the button in Link to make it functional */}
            <Link to="/contact">
             <button className="px-8 py-3 rounded-md font-bold text-blue-600 bg-white hover:bg-gray-50 transition-colors">
                Get Started
             </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;