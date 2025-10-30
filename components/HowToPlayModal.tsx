// src/components/HowToPlayModal.tsx

import React from 'react';

interface HowToPlayModalProps {
  onClose: () => void;
}

const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">How to Play</h2>
        
        <div className="text-left text-slate-600 space-y-4">
            <p>Welcome to <strong>The Dinner Decider</strong>! Follow these three simple steps to settle the great "what's for dinner?" debate.</p>
            <p><strong className="font-semibold text-slate-700">Step 1: Choose Tournament Size</strong><br />Select the number of contenders: 8, 16, or 32. A larger number means more rounds!</p>
            <p><strong className="font-semibold text-slate-700">Step 2: Filter Your Options (Optional)</strong><br />Narrow down your choices by filtering for specific dietary needs or cuisine types.</p>
            <p><strong className="font-semibold text-slate-700">Step 3: Start the Tournament!</strong><br />Hit the 'Start Tournament' button, then keep picking your favorite of the two dishes shown. The last dish standing is your winner!</p>
        </div>

        <div className="text-right mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-slate-200 text-slate-800 font-semibold rounded-lg hover:bg-slate-300 transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToPlayModal;