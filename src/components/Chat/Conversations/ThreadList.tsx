import React from 'react';

import { Conversation } from '@/types';
import ThreadListItemSkeleton from './ThreadListItemSkeleton';
import ThreadListItem from './ThreadListItem';
import ThreadListHeader from './ThreadListHeader';

interface IThreadListProps {
  threads?: Conversation[];
  selectedRecipient: string | null;
  // eslint-disable-next-line no-unused-vars
  onSelect: (recipient: string | null) => void;
  onCreateNewThread: () => void;
}

const ThreadList: React.FC<IThreadListProps> = ({ threads, selectedRecipient, onSelect, onCreateNewThread }) => {
  return (
    <aside className="flex h-full w-[350px] flex-col overflow-hidden border-r border-neutral-200">
      <ThreadListHeader onCreateNewThread={onCreateNewThread} />

      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto pt-2">
          {threads?.length! > 0
            ? threads?.map((thread) => (
                <ThreadListItem
                  key={thread.id}
                  thread={thread}
                  isOpended={thread.id === selectedRecipient}
                  onSelect={() => onSelect(thread.id)}
                />
              ))
            : [...Array(5)].map((_, i) => <ThreadListItemSkeleton key={i} />)}
        </div>
      </div>
    </aside>
  );
};

export default ThreadList;
