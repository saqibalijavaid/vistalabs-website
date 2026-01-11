import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  // STATE MANAGEMENT for user feedback
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // LOAD KEYS FROM .ENV
  // Ensure these exist in your .env file as VITE_EMAILJS_...
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert('EmailJS keys are missing! Check your .env file.');
      return;
    }

    setStatus('sending');

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result) => {
          console.log('Email Sent:', result.text);
          setStatus('success');
          // Reset form and status after 3 seconds
          setTimeout(() => {
            setStatus('idle');
            form.current?.reset();
          }, 3000);
        },
        (error) => {
          console.error('Email Failed:', error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 3000);
        }
      );
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Have a project in mind? Let's discuss how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in touch</h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <p className="font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">saqibalijavaid2@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                  <p className="text-gray-600 dark:text-gray-400">+92 (326) 4898521</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <p className="font-medium text-gray-900 dark:text-white">Office</p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    03 (Tech House) - A Block,
                    <br />
                    KBWH, Lahore 54000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name" // Matches EmailJS template
                  id="user_name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 bg-gray-50 dark:placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email" // Matches EmailJS template
                  id="user_email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 bg-gray-50 dark:placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  name="message" // Matches EmailJS template
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 bg-gray-50 dark:placeholder-gray-400"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Dynamic Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`
                  w-full flex items-center justify-center px-8 py-3 border border-transparent 
                  text-base font-bold rounded-md text-white transition-all duration-200
                  ${
                    status === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : status === 'error'
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-blue-600 hover:bg-blue-700'
                  }
                  disabled:opacity-70 disabled:cursor-not-allowed
                `}
              >
                {status === 'idle' && (
                  <>
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </>
                )}
                {status === 'sending' && (
                  <>
                    Sending...{' '}
                    <div className="ml-2 w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </>
                )}
                {status === 'success' && (
                  <>
                    Sent Successfully! <CheckCircle className="ml-2 h-5 w-5" />
                  </>
                )}
                {status === 'error' && (
                  <>
                    Failed. Try Again. <AlertCircle className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
