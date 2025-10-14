// src/screens/Contact.tsx

import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center text-slate-700 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">Contact Us</h1>
      <div className="space-y-4">
        <p>We'd love to hear from you!</p>
        <p>Whether you have a question about our app, feedback, or a partnership inquiry, please get in touch with us.</p>
        <p>The best way to reach us is by email:</p>
        <p>
          <a 
            href="mailto:[hello@thedinnerdecider.au]" 
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            hello@thedinnerdecider.au
          </a>
        </p>
        <p className="text-sm text-slate-500 mt-4">We'll do our best to respond to all inquiries within 48 hours. Thank you for using The Dinner Decider!</p>
      </div>
    </div>
  );
};

export default Contact;