import React from 'react';

const testimonials = [
  {
    content:
      'VistaLabs transformed our legacy system into a modern cloud architecture in record time.',
    author: 'Sarah Johnson',
    role: 'CTO, FinTech Startups',
  },
  {
    content:
      "The attention to detail and code quality is unlike anything we've seen from other agencies.",
    author: 'Michael Chen',
    role: 'Founder, DataFlow',
  },
  {
    content:
      "They didn't just build what we asked for; they improved our original idea significantly.",
    author: 'Emily Davis',
    role: 'Product Manager, HealthInc',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          Trusted by Innovators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{t.content}"</p>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">{t.author}</p>
                <p className="text-sm text-blue-600 dark:text-blue-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
