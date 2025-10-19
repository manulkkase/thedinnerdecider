// src/screens/PrivacyPolicy.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 text-slate-700 bg-white rounded-lg shadow-md">
      <Helmet>
        <title>Privacy Policy - The Dinner Decider</title>
        <meta name="description" content="Read the Privacy Policy for The Dinner Decider. We comply with the Australian Privacy Principles (APPs)." />
        <link rel="canonical" href="https://thedinnerdecider.au/privacy" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Privacy Policy for The Dinner Decider</h1>
      <div className="space-y-4 text-left">
        <p><strong>Last Updated:</strong> 12 September 2025</p>

        <p>Welcome to The Dinner Decider ("we", "us", or "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our web application.</p>
        <p>We comply with the Australian Privacy Principles (APPs) as set out in the Privacy Act 1988.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-800">1. Information We Collect</h2>
        <p>We may collect information that does not personally identify you ("Non-Personal Information"). This includes:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li><strong>Usage Data:</strong> Information about your interactions with our service, such as the filters you select, tournament sizes you choose, and your final food choices.</li>
          <li><strong>Device Information:</strong> Your browser type, operating system, and IP address to help us understand our user base and improve our service.</li>
        </ul>
        <p>We do not collect any personally identifiable information (PII) such as your name, email address, or phone number.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-800">2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Operate and maintain our application.</li>
          <li>Improve your user experience.</li>
          <li>Monitor and analyze usage and trends.</li>
          <li>Serve advertisements through third-party partners like Google AdSense.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-800">3. Third-Party Advertising (Google AdSense)</h2>
        <p>We use Google AdSense to serve advertisements on our site. Google uses cookies (such as the DoubleClick cookie) to serve ads based on a user's prior visits to this and other websites. You can opt out of personalised advertising by visiting Google's <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ads Settings</a>.</p>
        <p>For more information on how Google collects and uses data, please see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google's Privacy Policy</a>.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-800">4. Data Security</h2>
        <p>We take reasonable steps to protect your information from unauthorized access, use, or disclosure.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-800">5. Your Rights</h2>
        <p>As we do not collect personal information, your rights to access, correct, or delete personal data are not applicable. For any privacy-related questions, please contact us.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-800">6. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-slate-800">7. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:[privacy@thedinnerdecider.au]" className="text-blue-600 hover:underline">privacy@thedinnerdecider.au</a></p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;