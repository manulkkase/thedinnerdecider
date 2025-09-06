
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  roundName: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, roundName }) => {
  const progressPercentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full max-w-2xl mx-auto my-4 text-center">
        <div className="flex justify-between items-center mb-1 text-slate-600">
            <span className="font-semibold text-xl">{roundName}</span>
            <span className="text-sm font-medium">{current} / {total}</span>
        </div>
      <div className="w-full bg-slate-200 rounded-full h-4 shadow-inner">
        <div
          className="bg-amber-500 h-4 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
