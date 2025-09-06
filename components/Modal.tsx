
import React from 'react';
import Button from './Button';

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
        </div>
        <div className="p-6 text-slate-600">
          {children}
        </div>
        <div className="p-4 bg-slate-50 rounded-b-lg flex justify-end">
          <Button onClick={onClose} variant="primary">
            Got it!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
