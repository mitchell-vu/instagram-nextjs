import { DirectSvg } from '@/assets/svg';
import * as React from 'react';

interface IDirectNullProps {
  onCreateNewThread: () => void;
}

const DirectNull: React.FC<IDirectNullProps> = ({ onCreateNewThread }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center">
      <DirectSvg className="h-24 w-24" />

      <span className="mt-4 text-xl">Your Messages</span>
      <span className="mt-1 text-sm text-gray-500">Send private photos and messages to a friend or group.</span>

      <button
        onClick={onCreateNewThread}
        className="mt-4 rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600 disabled:opacity-70"
      >
        Send Message
      </button>
    </div>
  );
};

export default DirectNull;
