import React from 'react';
import { ChevronUpSvg, PenToSquareSvg } from '@/assets/svg';
import ConversationSelect from './ConversationSelect';

interface ISidebarProps {
  selectedRecipient: number | null;
  // eslint-disable-next-line no-unused-vars
  onSelect: (recipient: number | null) => void;
}

const Sidebar: React.FC<ISidebarProps> = ({ selectedRecipient, onSelect }) => {
  return (
    <aside className="flex h-full w-[350px] flex-col overflow-hidden border-r border-neutral-200">
      <header className="flex h-14 flex-row items-center justify-between border-b border-neutral-200 px-5">
        <div className="basis-8"></div>
        <button className="flex basis-0 flex-row items-center gap-2">
          <div className="font-semibold">mit.chell.vu</div>
          <ChevronUpSvg className="rotate-180 transform" />
        </button>
        <div className="flex-end ml-2 flex basis-8">
          <PenToSquareSvg />
        </div>
      </header>

      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto pt-2">
          {[...new Array(16)].map((_, i) => (
            <ConversationSelect key={i} isOpended={i === selectedRecipient} onSelect={() => onSelect(i)} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
