// src/screens/TermsOfService.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 text-slate-700 bg-white rounded-lg shadow-md">
      <Helmet>
        <title>Terms of Service - The Dinner Decider</title>
        <meta name="description" content="Please read the Terms of Service for using The Dinner Decider web application." />
        <link rel="canonical" href="https://www.thedinnerdecider.au/terms" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Terms of Service for The Dinner Decider</h1>
      <div className="space-y-4 text-left">
        <p><strong>Last Updated:</strong> 12 September 2025</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-800">1. Acceptance of Terms</h2>
        <p>By accessing and using The Dinner Decider (the "Service"), you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-800">2. Description of Service</h2>
        <p>The Service is a web-based application designed to help users decide what to eat through a tournament-style game. The Service is provided "as is" without warranties of any kind.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-800">3. User Conduct</h2>
        <p>You agree not to use the Service for any unlawful purpose or in any way that could damage, disable, or impair the Service.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-800">4. Intellectual Property</h2>
        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of The Dinner Decider and its licensors.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-800">5. Limitation of Liability</h2>
        <p>In no event shall The Dinner Decider, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-800">6. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of Australia, without regard to its conflict of law provisions.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-800">7. Changes</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-800">8. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at: <a href="mailto:[legal@thedinnerdecider.au]" className="text-blue-600 hover:underline">legal@thedinnerdecider.au</a></p>
      </div>
    </div>
  );
};

export default TermsOfService;