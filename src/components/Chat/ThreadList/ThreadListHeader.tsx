import { ChevronUpSvg, PenToSquareSvg } from '@/assets/svg';
import { auth } from '@/config/firebase';
import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

interface IThreadListHeaderProps {
  onCreateNewThread: () => void;
}

const ThreadListHeader: React.FC<IThreadListHeaderProps> = ({ onCreateNewThread }) => {
  const [loggedInUser] = useAuthState(auth);

  return (
    <header className="flex h-14 flex-row items-center justify-between border-b border-neutral-200 px-5">
      <div className="basis-8"></div>
      <button className="flex basis-0 flex-row items-center gap-2">
        <div className="truncate whitespace-nowrap font-semibold">{loggedInUser?.displayName}</div>
        <ChevronUpSvg className="rotate-180 transform" width={24} height={24} />
      </button>
      <div className="flex-end ml-2 flex basis-8">
        <button onClick={onCreateNewThread}>
          <PenToSquareSvg width={24} height={24} />
        </button>
      </div>
    </header>
  );
};

export default ThreadListHeader;
